import * as React from 'react';
import { cn } from '../../lib/utils';

export const SearchShortcut = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'pr-3 shrink-0 hidden lg:flex items-center gap-1 text-xs text-neutral-400 select-none pointer-events-none',
        className
      )}
      aria-hidden="true"
      {...props}
    >
      {children || (
        <>
          <kbd className="px-1.5 py-0.5 rounded border border-neutral-200 bg-white text-[10px] font-sans">
            ⌘
          </kbd>
          <kbd className="px-1.5 py-0.5 rounded border border-neutral-200 bg-white text-[10px] font-sans">
            K
          </kbd>
        </>
      )}
    </div>
  )
);
SearchShortcut.displayName = 'Search.Shortcut';
