import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export const SearchArrow = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Autocomplete.Arrow>>(
  ({ className, ...props }, ref) => (
    <Autocomplete.Arrow
      ref={ref}
      className={cn('fill-neutral-200 stroke-neutral-200', className)}
      {...props}
    />
  )
);
SearchArrow.displayName = 'Search.Arrow';
