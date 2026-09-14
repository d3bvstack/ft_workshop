import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export const SearchIcon = React.forwardRef<HTMLSpanElement, React.ComponentProps<typeof Autocomplete.Icon>>(
  ({ className, ...props }, ref) => (
    <Autocomplete.Icon
      ref={ref}
      className={cn('inline-flex items-center justify-center text-neutral-400', className)}
      {...props}
    />
  )
);
SearchIcon.displayName = 'Search.Icon';
