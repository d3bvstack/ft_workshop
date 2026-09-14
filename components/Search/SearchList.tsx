import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export const SearchList = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Autocomplete.List>>(
  ({ className, ...props }, ref) => (
    <Autocomplete.List
      ref={ref}
      className={cn(
        'max-h-[min(22.5rem,var(--available-height))] overflow-y-auto outline-none scroll-smooth',
        className
      )}
      {...props}
    />
  )
);
SearchList.displayName = 'Search.List';
