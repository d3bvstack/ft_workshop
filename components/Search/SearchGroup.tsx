import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export const SearchGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Autocomplete.Group>>(
  ({ className, ...props }, ref) => (
    <Autocomplete.Group ref={ref} className={cn('', className)} {...props} />
  )
);
SearchGroup.displayName = 'Search.Group';
