import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';

export const SearchCollection = (props: React.ComponentProps<typeof Autocomplete.Collection>) => (
  <Autocomplete.Collection {...props} />
);
SearchCollection.displayName = 'Search.Collection';
