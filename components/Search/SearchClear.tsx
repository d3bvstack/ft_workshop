import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export const SearchClear = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Autocomplete.Clear>>(
  ({ className, ...props }, ref) => (
    <Autocomplete.Clear
      ref={ref}
      className={cn('inline-flex items-center justify-center text-neutral-400 hover:text-neutral-600 pr-2', className)}
      {...props}
    />
  )
);
SearchClear.displayName = 'Search.Clear';
