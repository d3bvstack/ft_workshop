import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export const SearchPopup = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Autocomplete.Popup>>(
  ({ className, ...props }, ref) => (
    <Autocomplete.Popup
      ref={ref}
      className={cn(
        'mt-1 w-[var(--anchor-width)] overflow-hidden rounded-[4px] border border-[#d7dad2] bg-[#ecefe8] shadow-lg z-50',
        'flex flex-col',
        className
      )}
      {...props}
    />
  )
);
SearchPopup.displayName = 'Search.Popup';
