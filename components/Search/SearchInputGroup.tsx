import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';
import { Button } from '../Button';

export interface SearchInputGroupProps extends React.ComponentProps<typeof Autocomplete.InputGroup> {
  className?: string;
  searchButtonPosition?: 'leading' | 'trailing';
  children?: React.ReactNode;
}

export const SearchInputGroup = React.forwardRef<HTMLDivElement, SearchInputGroupProps>(
  ({ className, searchButtonPosition = 'leading', children, ...props }, ref) => {
    const button = (
      <Button
        variant="ghost"
        aria-label="Submit search"
        className={cn(
          'shrink-0 h-10 w-10 text-[#737373] hover:text-neutral-800',
          searchButtonPosition === 'leading' ? 'rounded-l-none' : 'rounded-r-none'
        )}
        onClick={(e) => {
          e.preventDefault();
          const input = e.currentTarget.closest('div')?.querySelector('input');
          if (input) {
            input.dispatchEvent(new Event('submit', { bubbles: true }));
          }
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </Button>
    );
    return (
      <Autocomplete.InputGroup
        ref={ref}
        className={cn(
          'relative flex items-center w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-md transition-[color,background-color,border-color,opacity,box-shadow,transform] duration-150',
          'focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2',
          className
        )}
        {...props}
      >
        {searchButtonPosition === 'leading' ? (
          <>
            {button}
            {children}
          </>
        ) : (
          <>
            {children}
            {button}
          </>
        )}
      </Autocomplete.InputGroup>
    );
  }
);
SearchInputGroup.displayName = 'Search.InputGroup';
