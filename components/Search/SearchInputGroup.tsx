import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export interface SearchInputGroupProps extends React.ComponentProps<typeof Autocomplete.InputGroup> {
  className?: string;
  children?: React.ReactNode;
}

export const SearchInputGroup = React.forwardRef<HTMLDivElement, SearchInputGroupProps>(
  ({ className, children, ...props }, ref) => (
    <Autocomplete.InputGroup
      ref={ref}
      className={cn(
        'relative flex items-center w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-md transition-[color,background-color,border-color,opacity,box-shadow,transform] duration-150',
        'focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2',
        className
      )}
      {...props}
    >
      <span
        className="pl-3 text-[0.75rem] text-[#737373] shrink-0 inline-flex items-center"
        aria-hidden="true"
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
      </span>
      {children}
    </Autocomplete.InputGroup>
  )
);
SearchInputGroup.displayName = 'Search.InputGroup';
