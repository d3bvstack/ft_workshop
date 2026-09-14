import * as React from 'react';
import { cn } from '../../lib/utils';

export const SearchActionButton = React.forwardRef<HTMLButtonElement, React.ComponentProps<'button'>>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        'w-full bg-[#7e896a] text-white px-3 py-2 text-[15px] font-normal leading-[24px] text-left',
        'font-sans font-normal',
        'hover:bg-[#6e795a] transition-colors',
        className
      )}
      {...props}
    />
  )
);
SearchActionButton.displayName = 'Search.ActionButton';
