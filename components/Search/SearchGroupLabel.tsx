import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export const SearchGroupLabel = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Autocomplete.GroupLabel>>(
  ({ className, ...props }, ref) => (
    <Autocomplete.GroupLabel
      ref={ref}
      className={cn(
        'bg-[#f4f5f0] px-3 py-2 text-[15px] font-medium leading-[24px] text-[#6f7a5a]',
        'font-sans font-medium',
        className
      )}
      {...props}
    />
  )
);
SearchGroupLabel.displayName = 'Search.GroupLabel';
