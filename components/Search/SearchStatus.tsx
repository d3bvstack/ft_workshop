import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export const SearchStatus = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Autocomplete.Status>>(
  ({ className, ...props }, ref) => (
    <Autocomplete.Status
      ref={ref}
      className={cn('px-3 py-2 text-xs text-neutral-500', className)}
      {...props}
    />
  )
);
SearchStatus.displayName = 'Search.Status';
