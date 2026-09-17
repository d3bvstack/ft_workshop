import * as React from 'react';
import { cn } from '../lib/utils';
import { Logo } from './Logo';
import { Search } from './Search';
import { UserRound, Menu, Search as SearchIcon, ChevronUp } from 'lucide-react';
import { Button } from './Button';

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logoLabel?: string;
  searchPlaceholder?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      logoLabel = 'ftLogo',
      searchPlaceholder = 'Search...',
      buttonLabel = 'Action',
      onButtonClick,
      className,
      ...props
    },
    ref
  ) => {
    const [showSearch, setShowSearch] = React.useState(false);
    const bookItems = [
      {
        id: 13238,
        pgId: 22623,
        title: 'Divinity',
        mdCoverImageUrl: 'https://gutenberg.pglaf.org/cache/epub/22623/pg22623.cover.medium.jpg',
        contributors: [{ role: 'author', author: 'Samachson, Joseph' }],
      },
      {
        id: 13239,
        pgId: 22624,
        title: 'The Moon Pool',
        mdCoverImageUrl: 'https://picsum.photos/seed/book2/52/83',
        contributors: [{ role: 'author', author: 'Merritt, A.' }],
      },
    ];
    const authorItems = [
      { id: 32042, name: 'Ely, David', aliases: ['Lilienthal, David Eli'] },
      { id: 32043, name: 'Smith, John', aliases: [] },
    ];
    return (
      <nav
        ref={ref}
        className={cn(
          'flex flex-col mobile:flex-row items-center justify-between rounded-sm gap-4 w-full px-2 py-2 bg-white',
          className
        )}
        {...props}
      >
        {/* Mobile layout: vertical */}
        <div className={cn("mobile:hidden flex flex-col w-full", showSearch ? "gap-4" : "gap-0")}>
          <div className="flex w-full items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Logo label={logoLabel} variant="iconOnly" />
            </div>
            <div className="flex-shrink-0 flex items-center gap-2">
              <Button variant="secondary" size="icon-md" aria-label="Search" onClick={() => setShowSearch((s) => !s)}>
                {showSearch ? <ChevronUp /> : <SearchIcon />}
              </Button>
              <Button onClick={onButtonClick} size="icon-md" aria-label={buttonLabel}>
                <UserRound />
              </Button>
            </div>
          </div>
          <div className={cn("grid w-full overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out", showSearch ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
            <div className="min-h-0 w-full">
            <Search.Root
              items={[...bookItems, ...authorItems]}
              filter={null}
              mode="list"
              className="w-full"
            >
              <Search.InputGroup className="w-full">
                <Search.Input placeholder={searchPlaceholder} />
                <Search.Shortcut />
              </Search.InputGroup>
              <Search.Portal>
                <Search.Positioner sideOffset={4}>
                  <Search.Popup>
                    <Search.List>
                      <Search.Group>
                        <Search.GroupLabel>Books</Search.GroupLabel>
                        {bookItems.map((book: any) => (
                          <Search.Item key={book.id.toString()} value={book.id.toString()}>
                            <Search.Row>
                              <Search.Cover
                                size="sm"
                                src={book.mdCoverImageUrl || ''}
                                alt={book.title}
                              />
                              <div>
                                <Search.ItemTitle>{book.title}</Search.ItemTitle>
                                <Search.ItemSubtitle>{book.contributors?.find((c: any) => c.role === 'author')?.author || book.contributors?.[0]?.author || 'Unknown'}</Search.ItemSubtitle>
                              </div>
                            </Search.Row>
                          </Search.Item>
                        ))}
                      </Search.Group>
                      <Search.Separator />
                      <Search.Group>
                        <Search.GroupLabel>Authors</Search.GroupLabel>
                        {authorItems.map((author: any) => (
                          <Search.Item key={author.id.toString()} value={author.id.toString()}>
                            <Search.Row>
                              <Search.Portrait
                                src="https://picsum.photos/seed/author1/53/53"
                                alt={author.name}
                              />
                              <div>
                                <Search.ItemTitle>{author.name}</Search.ItemTitle>
                                <Search.ItemSubtitle>1,280 followers</Search.ItemSubtitle>
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
            </div>
          </div>
        </div>

        {/* Tablet/Desktop layout: single row */}
        <div className="hidden mobile:flex w-full items-center justify-between gap-4">
          <div className="flex-shrink-0 flex items-center">
            <Logo label={logoLabel} />
          </div>
          <div className="flex-1 justify-center max-w-xl">
            <Search.Root
              items={[...bookItems, ...authorItems]}
              filter={null}
              mode="list"
              className="w-full"
            >
              <Search.InputGroup className="w-full">
                <Search.Input placeholder={searchPlaceholder} />
                <Search.Shortcut />
              </Search.InputGroup>
              <Search.Portal>
                <Search.Positioner sideOffset={4}>
                  <Search.Popup>
                    <Search.List>
                      <Search.Group>
                        <Search.GroupLabel>Books</Search.GroupLabel>
                        {bookItems.map((book: any) => (
                          <Search.Item key={book.id.toString()} value={book.id.toString()}>
                            <Search.Row>
                              <Search.Cover
                                size="sm"
                                src={book.mdCoverImageUrl || ''}
                                alt={book.title}
                              />
                              <div>
                                <Search.ItemTitle>{book.title}</Search.ItemTitle>
                                <Search.ItemSubtitle>{book.contributors?.find((c: any) => c.role === 'author')?.author || book.contributors?.[0]?.author || 'Unknown'}</Search.ItemSubtitle>
                              </div>
                            </Search.Row>
                          </Search.Item>
                        ))}
                      </Search.Group>
                      <Search.Separator />
                      <Search.Group>
                        <Search.GroupLabel>Authors</Search.GroupLabel>
                        {authorItems.map((author: any) => (
                          <Search.Item key={author.id.toString()} value={author.id.toString()}>
                            <Search.Row>
                              <Search.Portrait
                                src="https://picsum.photos/seed/author1/53/53"
                                alt={author.name}
                              />
                              <div>
                                <Search.ItemTitle>{author.name}</Search.ItemTitle>
                                <Search.ItemSubtitle>1,280 followers</Search.ItemSubtitle>
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
          </div>
          <div className="flex-shrink-0">
            <Button onClick={onButtonClick} startIcon={<UserRound />} size="md">{buttonLabel}</Button>
          </div>
        </div>
      </nav>
    );
  }
);

Navbar.displayName = 'Navbar';
