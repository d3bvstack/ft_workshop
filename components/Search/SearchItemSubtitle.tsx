import * as React from 'react';
import { cn } from '../../lib/utils';

export const SearchItemSubtitle = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'text-[16px] leading-[24px] text-[#737373]',
        'font-sans font-normal',
        'group-data-[highlighted]:text-[#C0C3B5]',
        className
      )}
      {...props}
    />
  )
);
SearchItemSubtitle.displayName = 'Search.ItemSubtitle';
