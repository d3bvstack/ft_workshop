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
    searchButtonPosition: 'leading',
    styledResults: false,
  },
  argTypes: {
    items: { control: 'object' },
    filter: { control: 'select', options: [null, 'contains'] },
    mode: { control: 'select', options: ['list', 'both', 'inline', 'none'] },
    limit: { control: 'number' },
    searchButtonPosition: {
      control: 'select',
      options: ['leading', 'trailing'],
    },
    styledResults: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Search Component

Composable autocomplete built on \`@base-ui/react/autocomplete\`.

### Controls
- \`items\`: data array
- \`filter\`: \`null\` or filter function
- \`mode\`: \`'list'\` | \`'both'\` | \`'inline'\` | \`'none'\`
- \`limit\`: max visible results
- \`searchButtonPosition\` (on \`InputGroup\`): \`'leading'\` | \`'trailing'\`

### Subcomponents
| Component | Purpose |
|---|---|
| \`Search.Root\` | Root provider |
| \`Search.InputGroup\` | Input container with optional ghost submit button |
| \`Search.Input\` | Combobox input |
| \`Search.Shortcut\` | Keyboard hint |
| \`Search.Clear\` | Clear value button |
| \`Search.Portal\` | Teleport popup |
| \`Search.Positioner\` | Popup anchor |
| \`Search.Popup\` | Dropdown |
| \`Search.List\` | Scrollable list |
| \`Search.Item\` | Selectable option |
| \`Search.Group\` / \`Search.GroupLabel\` | Grouped sections |
| \`Search.Separator\` | Divider |
| \`Search.Empty\` | No results message |
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
  render: (args: any) => {
    if (args.styledResults) {
      return (
        <Search.Root
          items={[
            { value: 'book-1', label: 'Book Title' },
            { value: 'book-2', label: 'Book Title' },
            { value: 'author-1', label: 'Author Name' },
            { value: 'author-2', label: 'Author Name' },
          ]}
          filter={null}
          mode="list"
        >
          <Search.InputGroup searchButtonPosition={args.searchButtonPosition}>
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
                        <Search.Cover
                          src="https://picsum.photos/seed/book1/52/83"
                          alt="Book Title"
                        />
                        <div>
                          <Search.ItemTitle>Book Title</Search.ItemTitle>
                          <Search.ItemSubtitle>Author</Search.ItemSubtitle>
                        </div>
                      </Search.Row>
                    </Search.Item>
                    <Search.Separator />
                    <Search.Item value="book-2">
                      <Search.Row>
                        <Search.Cover
                          src="https://picsum.photos/seed/book2/52/83"
                          alt="Book Title"
                        />
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
                        <Search.Portrait
                          src="https://picsum.photos/seed/author1/53/53"
                          alt="Author Name"
                        />
                        <div>
                          <Search.ItemTitle>Author Name</Search.ItemTitle>
                          <Search.ItemSubtitle>
                            1,280 followers
                          </Search.ItemSubtitle>
                        </div>
                      </Search.Row>
                    </Search.Item>
                    <Search.Separator />
                    <Search.Item value="author-2">
                      <Search.Row>
                        <Search.Portrait
                          src="https://picsum.photos/seed/author2/53/53"
                          alt="Author Name"
                        />
                        <div>
                          <Search.ItemTitle>Author Name</Search.ItemTitle>
                          <Search.ItemSubtitle>
                            1,280 followers
                          </Search.ItemSubtitle>
                        </div>
                      </Search.Row>
                    </Search.Item>
                  </Search.Group>
                  <Search.ActionButton>
                    See all 56 results for “searched string”
                  </Search.ActionButton>
                </Search.List>
              </Search.Popup>
            </Search.Positioner>
          </Search.Portal>
        </Search.Root>
      );
    }
    return (
      <Search.Root
        items={args.items}
        filter={args.filter}
        mode={args.mode}
        limit={args.limit}
      >
        <Search.InputGroup searchButtonPosition={args.searchButtonPosition}>
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
    );
  },
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
  args: {
    styledResults: false,
    searchButtonPosition: 'trailing',
  },

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

  render: (args: any) => {
    const bookItems = [
      {
        id: 13238,
        pgId: 22623,
        title: 'Divinity',
        alternativeTitles: [],
        description: 'A science fiction novel.',
        langCode: 'en',
        domainId: 11,
        issuedDate: '2007-09-16',
        viewCount: 0,
        downloadCount: 0,
        pgDownloadCount: 216,
        smCoverImageUrl: null,
        mdCoverImageUrl:
          'https://gutenberg.pglaf.org/cache/epub/22623/pg22623.cover.medium.jpg',
        lgCoverImageUrl: null,
        licenseStatement: 'Public domain in the USA.',
        createdAt: '2026-09-11T18:11:12.673Z',
        updatedAt: null,
        contributors: [
          { role: 'illustrator', author: 'Freas, Kelly' },
          { role: 'author', author: 'Samachson, Joseph' },
        ],
        genre: ['Fiction & Novels', 'Science Fiction & Fantasy'],
        domain: 'Language & Literature',
      },
      {
        id: 13239,
        pgId: 22624,
        title: 'The Moon Pool',
        mdCoverImageUrl: 'https://picsum.photos/seed/book2/52/83',
        contributors: [{ role: 'author', author: 'Merritt, A.' }],
        genre: ['Fiction'],
        domain: 'Language & Literature',
      },
      {
        id: 13240,
        pgId: 22625,
        title: 'The Time Machine',
        mdCoverImageUrl: 'https://picsum.photos/seed/book3/52/83',
        contributors: [{ role: 'author', author: 'Wells, H. G.' }],
        genre: ['Fiction'],
        domain: 'Language & Literature',
      },
      {
        id: 13241,
        pgId: 22626,
        title: 'War of the Worlds',
        mdCoverImageUrl: 'https://picsum.photos/seed/book4/52/83',
        contributors: [{ role: 'author', author: 'Wells, H. G.' }],
        genre: ['Fiction'],
        domain: 'Language & Literature',
      },
      {
        id: 13242,
        pgId: 22627,
        title: 'The Invisible Man',
        mdCoverImageUrl: 'https://picsum.photos/seed/book5/52/83',
        contributors: [{ role: 'author', author: 'Wells, H. G.' }],
        genre: ['Fiction'],
        domain: 'Language & Literature',
      },
    ];
    const authorItems = [
      {
        id: 32042,
        name: 'Ely, David',
        aliases: ['Lilienthal, David Eli'],
        bio: null,
        externalUrls: [],
        userId: null,
        pgId: 56529,
        birthDate: 1927,
        deathDate: null,
        createdAt: '2026-09-11T18:13:20.253Z',
        updatedAt: null,
      },
      {
        id: 32043,
        name: 'Smith, John',
        aliases: [],
        bio: null,
        externalUrls: [],
        userId: null,
        pgId: 56530,
        birthDate: 1950,
        deathDate: null,
        createdAt: '2026-09-11T18:13:20.253Z',
        updatedAt: null,
      },
      {
        id: 32044,
        name: 'Doe, Jane',
        aliases: [],
        bio: null,
        externalUrls: [],
        userId: null,
        pgId: 56531,
        birthDate: 1965,
        deathDate: null,
        createdAt: '2026-09-11T18:13:20.253Z',
        updatedAt: null,
      },
      {
        id: 32045,
        name: 'Brown, Alice',
        aliases: [],
        bio: null,
        externalUrls: [],
        userId: null,
        pgId: 56532,
        birthDate: 1970,
        deathDate: null,
        createdAt: '2026-09-11T18:13:20.253Z',
        updatedAt: null,
      },
      {
        id: 32046,
        name: 'Wilson, Bob',
        aliases: [],
        bio: null,
        externalUrls: [],
        userId: null,
        pgId: 56533,
        birthDate: 1980,
        deathDate: null,
        createdAt: '2026-09-11T18:13:20.253Z',
        updatedAt: null,
      },
      {
        id: 32047,
        name: 'Taylor, Carol',
        aliases: [],
        bio: null,
        externalUrls: [],
        userId: null,
        pgId: 56534,
        birthDate: 1990,
        deathDate: null,
        createdAt: '2026-09-11T18:13:20.253Z',
        updatedAt: null,
      },
    ];
    return (
      <Search.Root items={bookItems} filter={null} mode="list">
        <Search.InputGroup searchButtonPosition={args.searchButtonPosition}>
          <Search.Input placeholder="Search books and authors..." />
          <Search.Shortcut />
        </Search.InputGroup>
        <Search.Portal>
          <Search.Positioner sideOffset={4}>
            <Search.Popup>
              <Search.List>
                <Search.Group>
                  <Search.GroupLabel>Books</Search.GroupLabel>
                  {bookItems.map((book: any) => (
                    <Search.Item
                      key={book.id.toString()}
                      value={book.id.toString()}
                    >
                      <Search.Row>
                        <Search.Cover
                          src={book.mdCoverImageUrl || ''}
                          alt={book.title}
                        />
                        <div>
                          <Search.ItemTitle>{book.title}</Search.ItemTitle>
                          <Search.ItemSubtitle>
                            {book.contributors?.find(
                              (c: any) => c.role === 'author'
                            )?.author ||
                              book.contributors?.[0]?.author ||
                              'Unknown'}
                          </Search.ItemSubtitle>
                        </div>
                      </Search.Row>
                    </Search.Item>
                  ))}
                </Search.Group>
                <Search.Separator />
                <Search.Group>
                  <Search.GroupLabel>Authors</Search.GroupLabel>
                  {authorItems.map((author: any) => (
                    <Search.Item
                      key={author.id.toString()}
                      value={author.id.toString()}
                    >
                      <Search.Row>
                        <Search.Portrait
                          src="https://picsum.photos/seed/author1/53/53"
                          alt={author.name}
                        />
                        <div>
                          <Search.ItemTitle>{author.name}</Search.ItemTitle>
                          <Search.ItemSubtitle>
                            1,280 followers
                          </Search.ItemSubtitle>
                        </div>
                      </Search.Row>
                    </Search.Item>
                  ))}
                </Search.Group>
                <Search.ActionButton>
                  See all 56 results for “searched string”
                </Search.ActionButton>
              </Search.List>
            </Search.Popup>
          </Search.Positioner>
        </Search.Portal>
      </Search.Root>
    );
  },
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
                <Search.Item value="Analytics Dashboard">
                  Analytics Dashboard
                </Search.Item>
                <Search.Item value="Account Settings">
                  Account Settings
                </Search.Item>
              </Search.Group>
              <Search.Separator />
              <Search.Group>
                <Search.GroupLabel>Management</Search.GroupLabel>
                <Search.Item value="Billing & Invoicing">
                  Billing & Invoicing
                </Search.Item>
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

export const ButtonPosition: Story = {
  parameters: {
    docs: {
      description: {
        story: `
### Button Position — Leading vs Trailing Submit

The \`Search.InputGroup\` supports a ghost submit button that can be placed at the leading or trailing edge via \`searchButtonPosition\`.

**Controls:**
- \`searchButtonPosition\`: \`'leading'\` (default) or \`'trailing'\`.

**Usage:**
\`\`\`tsx
<Search.InputGroup searchButtonPosition="trailing">
  <Search.Input placeholder="Search..." />
  <Search.Shortcut />
</Search.InputGroup>
\`\`\`
        `,
      },
    },
  },
  args: {
    searchButtonPosition: 'leading',
  },
  argTypes: {
    searchButtonPosition: {
      control: 'select',
      options: ['leading', 'trailing'],
    },
  },
  render: (args: any) => (
    <Search.Root items={ITEMS}>
      <Search.InputGroup searchButtonPosition={args.searchButtonPosition}>
        <Search.Input placeholder="Search anything..." />
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
