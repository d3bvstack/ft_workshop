import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import type { AutocompleteRootProps } from '@base-ui/react/autocomplete';
import { cn } from '../../lib/utils';

export interface SearchRootProps<Value = string> extends AutocompleteRootProps<Value> {
  className?: string;
}

export function SearchRoot<Items extends readonly { items: readonly any[]; }[]>(
  props: SearchRootProps<any> & { items: Items; className?: string; children?: React.ReactNode }
): React.JSX.Element;
export function SearchRoot<Value = string>(
  props: SearchRootProps<Value> & { items?: AutocompleteRootProps<Value>['items']; className?: string; children?: React.ReactNode }
): React.JSX.Element;
export function SearchRoot<Value = string>({
  className,
  children,
  items = [],
  ...props
}: any) {
  return (
    <div className={cn('w-full max-w-[794px]', className)}>
      <Autocomplete.Root items={items} {...props}>
        {children}
      </Autocomplete.Root>
    </div>
  );
}
SearchRoot.displayName = 'Search.Root';
