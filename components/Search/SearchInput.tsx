import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export interface SearchInputProps extends React.ComponentProps<typeof Autocomplete.Input> {
  className?: string;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => (
    <Autocomplete.Input
      ref={ref}
      className={cn(
        'h-10 w-full min-w-0 rounded-md bg-transparent px-3 py-2 text-[1rem] font-normal text-neutral-800 placeholder:text-[1rem] placeholder:font-normal placeholder:text-[#737373]',
        'focus:outline-none focus:ring-0 focus:border-transparent',
        className
      )}
      {...props}
    />
  )
);
SearchInput.displayName = 'Search.Input';
