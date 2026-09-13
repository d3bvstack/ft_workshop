import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';
import type { AutocompleteRootProps } from '@base-ui/react/autocomplete';
import { cn } from '../lib/utils';
import { Cover } from './Cover';
import { Portrait } from './Portrait';

/*
 * Search — a minimal search primitive extending @base-ui/react/autocomplete.
 */

export interface SearchRootProps<
  Value = string,
> extends AutocompleteRootProps<Value> {
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
  items = [], // Safe fallback prevents useFilteredItems / autodocs crash
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

export interface SearchInputGroupProps extends React.ComponentProps<
  typeof Autocomplete.InputGroup
> {
  className?: string;
  children?: React.ReactNode;
}

export const SearchInputGroup = React.forwardRef<
  HTMLDivElement,
  SearchInputGroupProps
>(({ className, children, ...props }, ref) => (
  <Autocomplete.InputGroup
    ref={ref}
    className={cn(
      'relative flex items-center w-full bg-[#FAFAFA] border border-[#E5E5E5] rounded-md transition-[color,background-color,border-color,opacity,box-shadow,transform] duration-150',
      'focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2',
      className
    )}
    {...props}
  >
    <span
      className="pl-3 text-[0.75rem] text-[#737373] shrink-0 inline-flex items-center"
      aria-hidden="true"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </span>
    {children}
  </Autocomplete.InputGroup>
));
SearchInputGroup.displayName = 'Search.InputGroup';

export interface SearchInputProps extends React.ComponentProps<
  typeof Autocomplete.Input
> {
  className?: string;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => (
    <Autocomplete.Input
      ref={ref}
      className={cn(
        'h-10 w-full min-w-0 rounded-md bg-transparent px-3 py-2 text-[1rem] font-normal text-neutral-800 placeholder:text-[1rem] placeholder:font-normal placeholder:text-[#737373]',
        'focus:outline-none focus:ring-0 focus:border-transparent',
        className
      )}
      {...props}
    />
  )
);
SearchInput.displayName = 'Search.Input';

export const SearchShortcut = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, children, ...props }, ref) => (
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
));
SearchShortcut.displayName = 'Search.Shortcut';

export const SearchTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Autocomplete.Trigger>
>(({ className, ...props }, ref) => (
  <Autocomplete.Trigger
    ref={ref}
    className={cn('inline-flex items-center justify-center', className)}
    {...props}
  />
));
SearchTrigger.displayName = 'Search.Trigger';

export const SearchValue = (
  props: React.ComponentProps<typeof Autocomplete.Value>
) => <Autocomplete.Value {...props} />;
SearchValue.displayName = 'Search.Value';

export const SearchIcon = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<typeof Autocomplete.Icon>
>(({ className, ...props }, ref) => (
  <Autocomplete.Icon
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center text-neutral-400',
      className
    )}
    {...props}
  />
));
SearchIcon.displayName = 'Search.Icon';

export const SearchClear = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Autocomplete.Clear>
>(({ className, ...props }, ref) => (
  <Autocomplete.Clear
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center text-neutral-400 hover:text-neutral-600 pr-2',
      className
    )}
    {...props}
  />
));
SearchClear.displayName = 'Search.Clear';

export const SearchPositioner = Autocomplete.Positioner;
SearchPositioner.displayName = 'Search.Positioner';

export const SearchPortal = Autocomplete.Portal;
SearchPortal.displayName = 'Search.Portal';

export const SearchPopup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Autocomplete.Popup>
>(({ className, ...props }, ref) => (
  <Autocomplete.Popup
    ref={ref}
    className={cn(
      'mt-1 w-[var(--anchor-width)] overflow-hidden rounded-[4px] border border-[#d7dad2] bg-[#ecefe8] shadow-lg z-50',
      'flex flex-col',
      className
    )}
    {...props}
  />
));
SearchPopup.displayName = 'Search.Popup';

export const SearchArrow = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Autocomplete.Arrow>
>(({ className, ...props }, ref) => (
  <Autocomplete.Arrow
    ref={ref}
    className={cn('fill-neutral-200 stroke-neutral-200', className)}
    {...props}
  />
));
SearchArrow.displayName = 'Search.Arrow';

export const SearchList = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Autocomplete.List>
>(({ className, ...props }, ref) => (
  <Autocomplete.List
    ref={ref}
    className={cn(
      'max-h-[min(22.5rem,var(--available-height))] overflow-y-auto outline-none scroll-smooth',
      className
    )}
    {...props}
  />
));
SearchList.displayName = 'Search.List';

export const SearchItem = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Autocomplete.Item>
>(({ className, ...props }, ref) => (
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
));
SearchItem.displayName = 'Search.Item';

export const SearchRow = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Autocomplete.Row>
>(({ className, ...props }, ref) => (
  <Autocomplete.Row
    ref={ref}
    className={cn('flex items-center gap-3', className)}
    {...props}
  />
));
SearchRow.displayName = 'Search.Row';

export const SearchGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Autocomplete.Group>
>(({ className, ...props }, ref) => (
  <Autocomplete.Group ref={ref} className={cn('', className)} {...props} />
));
SearchGroup.displayName = 'Search.Group';

export const SearchGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Autocomplete.GroupLabel>
>(({ className, ...props }, ref) => (
  <Autocomplete.GroupLabel
    ref={ref}
    className={cn(
      'bg-[#f4f5f0] px-3 py-2 text-[15px] font-medium leading-[24px] text-[#6f7a5a]',
      'font-sans font-medium',
      className
    )}
    {...props}
  />
));
SearchGroupLabel.displayName = 'Search.GroupLabel';

export const SearchSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Autocomplete.Separator>
>(({ className, ...props }, ref) => (
  <Autocomplete.Separator
    ref={ref}
    className={cn('my-0 h-px bg-[#ECEFE8]', className)}
    {...props}
  />
));
SearchSeparator.displayName = 'Search.Separator';

export const SearchEmpty = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Autocomplete.Empty>
>(({ className, children, ...props }, ref) => (
  <Autocomplete.Empty ref={ref} className={className} {...props}>
    <div className="px-3 py-4 text-sm text-neutral-500 dark:text-neutral-400">
      {children || 'No results found.'}
    </div>
  </Autocomplete.Empty>
));
SearchEmpty.displayName = 'Search.Empty';

export const SearchStatus = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Autocomplete.Status>
>(({ className, ...props }, ref) => (
  <Autocomplete.Status
    ref={ref}
    className={cn('px-3 py-2 text-xs text-neutral-500', className)}
    {...props}
  />
));
SearchStatus.displayName = 'Search.Status';

export const SearchCollection = (
  props: React.ComponentProps<typeof Autocomplete.Collection>
) => <Autocomplete.Collection {...props} />;
SearchCollection.displayName = 'Search.Collection';

export const SearchBackdrop = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<typeof Autocomplete.Backdrop>
>(({ className, ...props }, ref) => (
  <Autocomplete.Backdrop
    ref={ref}
    className={cn('fixed inset-0 bg-black/20', className)}
    {...props}
  />
));
SearchBackdrop.displayName = 'Search.Backdrop';

export const SearchCover = Cover;
SearchCover.displayName = 'Search.Cover';

export const SearchPortrait = Portrait;
SearchPortrait.displayName = 'Search.Portrait';

export const SearchItemTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => (
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
));
SearchItemTitle.displayName = 'Search.ItemTitle';

export const SearchItemSubtitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => (
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
));
SearchItemSubtitle.displayName = 'Search.ItemSubtitle';

export const SearchActionButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={cn(
      'w-full bg-[#7e896a] text-white px-3 py-2 text-[15px] font-regular leading-[24px] text-left',
      'font-sans font-regular',
      'hover:bg-[#6e795a] transition-colors',
      className
    )}
    {...props}
  />
));
SearchActionButton.displayName = 'Search.ActionButton';

export const Search = {
  Root: SearchRoot,
  InputGroup: SearchInputGroup,
  Input: SearchInput,
  Shortcut: SearchShortcut,
  Trigger: SearchTrigger,
  Value: SearchValue,
  Icon: SearchIcon,
  Clear: SearchClear,
  Portal: SearchPortal,
  Positioner: SearchPositioner,
  Popup: SearchPopup,
  Arrow: SearchArrow,
  List: SearchList,
  Item: SearchItem,
  Row: SearchRow,
  Group: SearchGroup,
  GroupLabel: SearchGroupLabel,
  Separator: SearchSeparator,
  Empty: SearchEmpty,
  Status: SearchStatus,
  Collection: SearchCollection,
  Backdrop: SearchBackdrop,
  Cover: SearchCover,
  Portrait: SearchPortrait,
  ItemTitle: SearchItemTitle,
  ItemSubtitle: SearchItemSubtitle,
  ActionButton: SearchActionButton,
};
