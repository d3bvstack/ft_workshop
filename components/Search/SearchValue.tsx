import * as React from 'react';
import { Autocomplete } from '@base-ui/react/autocomplete';

export const SearchValue = (props: React.ComponentProps<typeof Autocomplete.Value>) => (
  <Autocomplete.Value {...props} />
);
SearchValue.displayName = 'Search.Value';
