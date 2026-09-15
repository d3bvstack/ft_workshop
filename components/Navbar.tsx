import * as React from 'react';
import { cn } from '../lib/utils';
import { Logo } from './Logo';
import { Search } from './Search';
import { UserRound, Menu, Search as SearchIcon } from 'lucide-react';
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
        <div className="mobile:hidden flex flex-col w-full gap-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Logo label={logoLabel} variant="iconOnly" />
            </div>
            <div className="flex-shrink-0 flex items-center gap-2">
              <Button variant="secondary" size="icon-md" aria-label="Search">
                <SearchIcon />
              </Button>
              <Button onClick={onButtonClick} size="icon-md" aria-label={buttonLabel}>
                <UserRound />
              </Button>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <Search.Root
              items={[
                { value: 'book-1', label: 'Book Title' },
                { value: 'book-2', label: 'Book Title' },
                { value: 'author-1', label: 'Author Name' },
                { value: 'author-2', label: 'Author Name' },
              ]}
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
                        <Search.Item value="book-1">
                          <Search.Row>
                            <Search.Cover
                              size="sm"
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
                              <Search.ItemSubtitle>1,280 followers</Search.ItemSubtitle>
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
                              <Search.ItemSubtitle>1,280 followers</Search.ItemSubtitle>
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
          </div>
        </div>

        {/* Tablet/Desktop layout: single row */}
        <div className="hidden mobile:flex w-full items-center justify-between gap-4">
          <div className="flex-shrink-0 flex items-center">
            <Logo label={logoLabel} />
          </div>
          <div className="flex-1 justify-center max-w-xl">
            <Search.Root
              items={[
                { value: 'book-1', label: 'Book Title' },
                { value: 'book-2', label: 'Book Title' },
                { value: 'author-1', label: 'Author Name' },
                { value: 'author-2', label: 'Author Name' },
              ]}
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
                        <Search.Item value="book-1">
                          <Search.Row>
                            <Search.Cover
                              size="sm"
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
                              <Search.ItemSubtitle>1,280 followers</Search.ItemSubtitle>
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
                              <Search.ItemSubtitle>1,280 followers</Search.ItemSubtitle>
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
