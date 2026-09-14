import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export const SearchSeparator = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Autocomplete.Separator>>(
  ({ className, ...props }, ref) => (
    <Autocomplete.Separator
      ref={ref}
      className={cn('my-0 h-px bg-[#ECEFE8]', className)}
      {...props}
    />
  )
);
SearchSeparator.displayName = 'Search.Separator';
