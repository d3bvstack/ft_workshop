import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from 'storybook/test';
import { Search } from '../components/Search/index';

interface Item {
  value: string;
  label: string;
}

const ITEMS: Item[] = [
  { value: 'Analytics Dashboard', label: 'Analytics Dashboard' },
  { value: 'Account Settings', label: 'Account Settings' },
  { value: 'Billing & Invoicing', label: 'Billing & Invoicing' },
  { value: 'Team Members', label: 'Team Members' },
];

const meta = {
  title: 'Search',
  component: Search.Root,
  args: {
    items: ITEMS,
  },
  parameters: {
    docs: {
      description: {
        component: `
## Search Component

A minimal, composable search primitive built on \`@base-ui/react/autocomplete\`. It provides a full autocomplete experience—typing, filtering, navigation, selection, groups, and keyboard shortcuts—without imposing opinionated styling beyond the structural tokens it defines.

---

### Philosophy

Keep the component uncarved (\`P'u\`). \`Search\` is not a heavy abstraction; it is a thin, direct wrapper around the base-ui autocomplete primitives with consistent styling tokens. Use only the pieces you need and compose them naturally.

---

### Component Structure

\`<Search.Root>\` is the root provider. Everything else is a named export composed inside it:

\`\`\`tsx
import { Search } from '../components/Search/index';

<Search.Root items={items}>
  <Search.InputGroup>
    <Search.Input placeholder="Search..." />
    <Search.Clear />
    <Search.Shortcut />
  </Search.InputGroup>

  <Search.Portal>
    <Search.Positioner sideOffset={4}>
      <Search.Popup>
        <Search.List>
          <Search.Collection>
            {(item) => (
              <Search.Item key={item.value} value={item.value}>
                {item.label}
              </Search.Item>
            )}
          </Search.Collection>
        </Search.List>
        <Search.Empty />
      </Search.Popup>
    </Search.Positioner>
  </Search.Portal>
</Search.Root>
\`\`\`

---

### Subcomponents

| Subcomponent | Purpose |
|---|---|
| \`Search.Root\` | Root autocomplete wrapper. Accepts \`items\`, \`filter\`, \`limit\`, and all base \`Autocomplete.Root\` props. |
| \`Search.InputGroup\` | Outer container for the input area. Applies the border, background, focus ring, and holds icon/shortcut/clear elements. |
| \`Search.Input\` | The actual \`<input>\`. Handles typing, filtering triggers, and keyboard interaction. |
| \`Search.Shortcut\` | Displays keyboard shortcut hint (default \`⌘K\`). Hidden below \`lg\` breakpoint. |
| \`Search.Clear\` | Button that clears the current value/input. |
| \`Search.Trigger\` | Opens/closes the popup manually. |
| \`Search.Value\` | Renders the selected value. |
| \`Search.Icon\` | General icon wrapper. |
| \`Search.Portal\` | Teleports the popup out of the DOM hierarchy. |
| \`Search.Positioner\` | Positions the popup relative to an anchor (default is the input group). |
| \`Search.Popup\` | The dropdown container. Applies shadow, border, and dark-mode tokens. |
| \`Search.Arrow\` | Small dropdown arrow indicator. |
| \`Search.List\` | Scrollable list container with max-height limits. |
| \`Search.Item\` | Individual selectable option. Handles highlighted state styling. |
| \`Search.Row\` | Flex row container for item content. |
| \`Search.Group\` | Groups related items together. |
| \`Search.GroupLabel\` | Label for a group (e.g., "Navigation"). |
| \`Search.Separator\` | Visual divider between groups. |
| \`Search.Empty\` | Message shown when no results exist (default: "No results found."). |
| \`Search.Status\` | Status text (e.g., "No results"). |
| \`Search.Collection\` | Renders collections from \`items\`. Accepts a render function. |
| \`Search.Backdrop\` | Click-outside overlay. |

---

### Key Props

**\`Search.Root\`**

- \`items\`: \`Item[]\` — Data source.
- \`filter\`: Filter function or \`null\`. Pass \`null\` to disable internal filtering (useful for externally computed results or unfiltered lists).
- \`limit\`: Cap the number of visible results. Works with \`filter={null}\` to show a fixed-size list.
- \`mode\`: Controls filtering and inline autocompletion behavior (\`'list'\` | \`'both'\` | \`'inline'\` | \`'none'\`). Use \`'none'\` for unfiltered lists.
- \`filteredItems\`: Pass externally computed results (e.g., from fuzzy/trigram search) while keeping \`items\` as the full dataset.

---

### Usage Patterns

#### Default — Filtered Search
Pass \`items\` and let the component filter as the user types.

\`\`\`tsx
<Search.Root items={ITEMS}>
  ...
</Search.Root>
\`\`\`

#### Limited Unfiltered — Show Fixed Amount Without Filtering
Use \`filter={null}\` to disable internal filtering. Use \`limit\` to cap results. Set \`mode="none"\` for unfiltered behavior.

\`\`\`tsx
<Search.Root items={allItems} filter={null} limit={5} mode="none">
  ...
</Search.Root>
\`\`\`

#### External Fuzzy / Trigram Search
Keep the full dataset in \`items\`, compute results externally (e.g., with a trigram library), and pass them to \`filteredItems\`. Disable the internal filter with \`filter={null}\` so the component does not try to filter again over your pre-filtered set.

\`\`\`tsx
<Search.Root items={allItems} filteredItems={fuzzyResults} filter={null}>
  ...
</Search.Root>
\`\`\`

#### Grouped Results
Wrap items in \`Search.Group\` with a \`Search.GroupLabel\`. Use \`Search.Separator\` between groups for visual separation.

---

### Styling Notes

- \`Search.InputGroup\` applies \`focus-within:ring-2 focus-within:ring-primary\` for focus states.
- \`Search.Input\` removes its own focus outline (\`focus:ring-0\`) because the parent \`InputGroup\` handles the visual focus indicator.
- \`Search.Item\` applies a pseudo-element highlight background (\`before:bg-primary\`) so highlighted text remains white on primary color.
- \`Search.Popup\` uses CSS variables \`--anchor-width\` and \`--available-width\` set by \`Positioner\` for responsive width.
- Dark mode tokens are included (e.g., \`dark:border-secondary-dark dark:bg-secondary\`).

---

### Accessibility

- \`Search.Input\` renders a native \`combobox\` role.
- \`Search.Item\` renders native \`option\` roles inside the listbox.
- \`Search.Shortcut\` uses \`aria-hidden="true"\` because it is purely decorative.
- \`Search.Empty\` provides accessible feedback when filtering yields nothing.

---

### Direct, Minimal Approach

Do not over-engineer. Import only what you need. If you only need a basic dropdown, use \`Search.Root\`, \`InputGroup\`, \`Input\`, \`Portal\`, \`Positioner\`, \`Popup\`, \`List\`, \`Item\`, and \`Empty\`. Add \`Group\`, \`Separator\`, \`Clear\`, and \`Shortcut\` only when the use case demands them. This aligns with \`Wu Wei\`—let the natural structure of the component guide your composition rather than forcing extra abstraction.
`,
      },
    },
  },
  tags: ['autodocs'],

} satisfies Meta<typeof Search.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Default Story — Filtered Interactive Search

This is the standard usage: pass \`items\`, type to filter, navigate with arrow keys, and select with \`Enter\`. The component handles filtering automatically.

**What it demonstrates:**
- Basic composition with \`InputGroup\`, \`Input\`, \`Clear\`, and \`Shortcut\`.
- \`Collection\` rendering items from \`items\`.
- \`Empty\` shown when no matches exist.
- Keyboard interaction and selection testing via \`play\`.

**Usage:**
\`\`\`tsx
<Search.Root items={items}>
  <Search.InputGroup>
    <Search.Input placeholder="Search..." />
    <Search.Clear />
    <Search.Shortcut />
  </Search.InputGroup>
  <Search.Portal>
    <Search.Positioner sideOffset={4}>
      <Search.Popup>
        <Search.List>
          <Search.Collection>
            {(item) => (
              <Search.Item key={item.value} value={item.value}>
                {item.label}
              </Search.Item>
            )}
          </Search.Collection>
        </Search.List>
        <Search.Empty />
      </Search.Popup>
    </Search.Positioner>
  </Search.Portal>
</Search.Root>
\`\`\`
        `,
      },
    },
  },
  render: () => (
    <Search.Root items={ITEMS}>
      <Search.InputGroup>
        <Search.Input placeholder="Search anything..." />
        <Search.Clear>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </Search.Clear>
        <Search.Shortcut />
      </Search.InputGroup>

      <Search.Portal>
        <Search.Positioner sideOffset={4}>
          <Search.Popup>
            <Search.List>
              <Search.Collection>
                {(item: Item) => (
                  <Search.Item key={item.value} value={item.value}>
                    {item.label}
                  </Search.Item>
                )}
              </Search.Collection>
            </Search.List>
            <Search.Empty />
          </Search.Popup>
        </Search.Positioner>
      </Search.Portal>
    </Search.Root>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox');

    await userEvent.click(input);
    await userEvent.type(input, 'Settings');

    const body = within(document.body);
    const item = await body.findByRole('option', { name: 'Account Settings' });
    await expect(item).toBeInTheDocument();

    await userEvent.keyboard('{ArrowDown}');
    await expect(item).toHaveAttribute('data-highlighted');

    await userEvent.keyboard('{Enter}');
  },
};

export const LimitedUnfiltered: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Limited Unfiltered — Fixed List, No Filtering

Use this when you want to display a capped number of items without filtering. The user sees the first \`limit\` items regardless of input.

**Key props:**
- \`filter={null}\` — disables internal filtering.
- \`limit={3}\` — caps visible results.
- \`mode="none"\` — unfiltered behavior (items are static, no filtering).

**Usage:**
\`\`\`tsx
<Search.Root items={allItems} filter={null} limit={3} mode="none">
  ...
</Search.Root>
\`\`\`
        `,
      },
    },
  },
  render: () => (
    <Search.Root items={ITEMS} filter={null} limit={3} mode="none">
      <Search.InputGroup>
        <Search.Input placeholder="Show only 3 items..." />
        <Search.Shortcut />
      </Search.InputGroup>
      <Search.Portal>
        <Search.Positioner sideOffset={4}>
          <Search.Popup>
            <Search.List>
              <Search.Collection>
                {(item: Item) => (
                  <Search.Item key={item.value} value={item.value}>
                    {item.label}
                  </Search.Item>
                )}
              </Search.Collection>
            </Search.List>
            <Search.Empty />
          </Search.Popup>
        </Search.Positioner>
      </Search.Portal>
    </Search.Root>
  ),
};



export const StyledResults: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Styled Results — Book & Author Search

Demonstrates the styled popup approach matching the reference design: grouped sections with cover/portrait images, titles, subtitles, and an action button.

**Usage:**
\`\`\`tsx
<Search.Root items={items} filter={null} mode="none">
  <Search.InputGroup>
    <Search.Input placeholder="Search books and authors..." />
    <Search.Shortcut />
  </Search.InputGroup>
  <Search.Portal>
    <Search.Positioner sideOffset={4}>
      <Search.Popup>
        <Search.List>
          <Search.Group>
            <Search.GroupLabel>Books</Search.GroupLabel>
            <Search.Item value="book-1">
              <Search.Row>
                <Search.Cover src="cover0.png" alt="Book Title" />
                <div>
                  <Search.ItemTitle>Book Title</Search.ItemTitle>
                  <Search.ItemSubtitle>Author</Search.ItemSubtitle>
                </div>
              </Search.Row>
            </Search.Item>
          </Search.Group>
          <Search.Separator />
          <Search.Group>
            <Search.GroupLabel>Authors</Search.GroupLabel>
            <Search.Item value="author-1">
              <Search.Row>
                <Search.Portrait src="portrait0.png" alt="Author Name" />
                <div>
                  <Search.ItemTitle>Author Name</Search.ItemTitle>
                  <Search.ItemSubtitle>1,280 followers</Search.ItemSubtitle>
                </div>
              </Search.Row>
            </Search.Item>
          </Search.Group>
          <Search.ActionButton>See all 56 results for “searched string”</Search.ActionButton>
        </Search.List>
      </Search.Popup>
    </Search.Positioner>
  </Search.Portal>
</Search.Root>
\`\`\`
        `,
      },
    },
  },
  render: () => (
    <Search.Root items={[
      { value: 'book-1', label: 'Book Title' },
      { value: 'book-2', label: 'Book Title' },
      { value: 'author-1', label: 'Author Name' },
      { value: 'author-2', label: 'Author Name' },
    ]} filter={null} mode="list">
      <Search.InputGroup>
        <Search.Input placeholder="Search books and authors..." />
        <Search.Shortcut />
      </Search.InputGroup>
      <Search.Portal>
        <Search.Positioner sideOffset={4}>
          <Search.Popup>
            <Search.List>
              <Search.Group>
                <Search.GroupLabel>Books</Search.GroupLabel>
                <Search.Item value="book-1">
                  <Search.Row>
                    <Search.Cover src="https://picsum.photos/seed/book1/52/83" alt="Book Title" />
                    <div>
                      <Search.ItemTitle>Book Title</Search.ItemTitle>
                      <Search.ItemSubtitle>Author</Search.ItemSubtitle>
                    </div>
                  </Search.Row>
                </Search.Item>
                <Search.Separator />
                <Search.Item value="book-2">
                  <Search.Row>
                    <Search.Cover src="https://picsum.photos/seed/book2/52/83" alt="Book Title" />
                    <div>
                      <Search.ItemTitle>Book Title</Search.ItemTitle>
                      <Search.ItemSubtitle>Author</Search.ItemSubtitle>
                    </div>
                  </Search.Row>
                </Search.Item>
              </Search.Group>
              <Search.Separator />
              <Search.Group>
                <Search.GroupLabel>Authors</Search.GroupLabel>
                <Search.Item value="author-1">
                  <Search.Row>
                    <Search.Portrait src="https://picsum.photos/seed/author1/53/53" alt="Author Name" />
                    <div>
                      <Search.ItemTitle>Author Name</Search.ItemTitle>
                      <Search.ItemSubtitle>1,280 followers</Search.ItemSubtitle>
                    </div>
                  </Search.Row>
                </Search.Item>
                <Search.Separator />
                <Search.Item value="author-2">
                  <Search.Row>
                    <Search.Portrait src="https://picsum.photos/seed/author2/53/53" alt="Author Name" />
                    <div>
                      <Search.ItemTitle>Author Name</Search.ItemTitle>
                      <Search.ItemSubtitle>1,280 followers</Search.ItemSubtitle>
                    </div>
                  </Search.Row>
                </Search.Item>
              </Search.Group>
              <Search.ActionButton>See all 56 results for “searched string”</Search.ActionButton>
            </Search.List>
          </Search.Popup>
        </Search.Positioner>
      </Search.Portal>
    </Search.Root>
  ),
};

export const Grouped: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Grouped — Organized Results

Use \`Search.Group\` and \`Search.GroupLabel\` to categorize results. \`Search.Separator\` provides a visual divider between categories.

**When to use:**
- Navigation menus split by category.
- Settings organized by section.
- Any dataset that benefits from visual grouping rather than a flat list.

**Usage:**
\`\`\`tsx
<Search.Root items={items}>
  <Search.InputGroup>...</Search.InputGroup>
  <Search.Portal>...
    <Search.List>
      <Search.Group>
        <Search.GroupLabel>Navigation</Search.GroupLabel>
        <Search.Item value="Analytics Dashboard">Analytics Dashboard</Search.Item>
        <Search.Item value="Account Settings">Account Settings</Search.Item>
      </Search.Group>
      <Search.Separator />
      <Search.Group>
        <Search.GroupLabel>Management</Search.GroupLabel>
        <Search.Item value="Billing & Invoicing">Billing & Invoicing</Search.Item>
        <Search.Item value="Team Members">Team Members</Search.Item>
      </Search.Group>
    </Search.List>
  </Search.Portal>
</Search.Root>
\`\`\`
        `,
      },
    },
  },
  render: () => (
    <Search.Root items={ITEMS}>
      <Search.InputGroup>
        <Search.Input placeholder="Search system resources..." />
        <Search.Shortcut />
      </Search.InputGroup>

      <Search.Portal>
        <Search.Positioner sideOffset={4}>
          <Search.Popup>
            <Search.List>
              <Search.Group>
                <Search.GroupLabel>Navigation</Search.GroupLabel>
                <Search.Item value="Analytics Dashboard">Analytics Dashboard</Search.Item>
                <Search.Item value="Account Settings">Account Settings</Search.Item>
              </Search.Group>
              <Search.Separator />
              <Search.Group>
                <Search.GroupLabel>Management</Search.GroupLabel>
                <Search.Item value="Billing & Invoicing">Billing & Invoicing</Search.Item>
                <Search.Item value="Team Members">Team Members</Search.Item>
              </Search.Group>
            </Search.List>
            <Search.Empty />
          </Search.Popup>
        </Search.Positioner>
      </Search.Portal>
    </Search.Root>
  ),
};
