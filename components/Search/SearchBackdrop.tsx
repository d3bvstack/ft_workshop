import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export const SearchBackdrop = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Autocomplete.Backdrop>>(
  ({ className, ...props }, ref) => (
    <Autocomplete.Backdrop
      ref={ref}
      className={cn('fixed inset-0 bg-black/20', className)}
      {...props}
    />
  )
);
SearchBackdrop.displayName = 'Search.Backdrop';
