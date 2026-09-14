import * as React from 'react';
import { cn } from '../../lib/utils';

export const SearchItemTitle = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'text-[18px] font-semibold leading-[28px] text-[#6f7a5a]',
        'font-sans font-semibold',
        'group-data-[highlighted]:text-white',
        className
      )}
      {...props}
    />
  )
);
SearchItemTitle.displayName = 'Search.ItemTitle';
