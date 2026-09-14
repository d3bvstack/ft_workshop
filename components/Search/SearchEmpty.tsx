import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';

export const SearchEmpty = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof Autocomplete.Empty>>(
  ({ className, children, ...props }, ref) => (
    <Autocomplete.Empty ref={ref} className={className} {...props}>
      <div className="px-3 py-4 text-sm text-neutral-500 dark:text-neutral-400">
        {children || 'No results found.'}
      </div>
    </Autocomplete.Empty>
  )
);
SearchEmpty.displayName = 'Search.Empty';
