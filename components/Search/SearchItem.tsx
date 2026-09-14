import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export const SearchItem = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Autocomplete.Item>>(
  ({ className, ...props }, ref) => (
    <Autocomplete.Item
      ref={ref}
      className={cn(
        'cursor-default select-none bg-white px-2 py-2 text-sm leading-5 text-[#6f7a5a] outline-none',
        'flex items-center gap-3 group',
        'data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-white',
        'data-[highlighted]:before:absolute data-[highlighted]:before:inset-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:bg-[#6f7a5a]',
        className
      )}
      {...props}
    />
  )
);
SearchItem.displayName = 'Search.Item';
