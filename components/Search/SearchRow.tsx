import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export const SearchRow = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Autocomplete.Row>>(
  ({ className, ...props }, ref) => (
    <Autocomplete.Row
      ref={ref}
      className={cn('flex items-center gap-3', className)}
      {...props}
    />
  )
);
SearchRow.displayName = 'Search.Row';
