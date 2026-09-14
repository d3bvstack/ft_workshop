import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export const SearchTrigger = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Autocomplete.Trigger>>(
  ({ className, ...props }, ref) => (
    <Autocomplete.Trigger
      ref={ref}
      className={cn('inline-flex items-center justify-center', className)}
      {...props}
    />
  )
);
SearchTrigger.displayName = 'Search.Trigger';
