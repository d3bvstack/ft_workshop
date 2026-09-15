import * as React from 'react';
import { Cover, type CoverProps } from '../Cover';

export const SearchCover = React.forwardRef<HTMLImageElement, CoverProps>((props, ref) => (
  <Cover ref={ref} size="sm" {...props} />
));
SearchCover.displayName = 'Search.Cover';
