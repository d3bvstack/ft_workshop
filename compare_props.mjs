import React from 'react';
const Autocomplete = await import('@base-ui/react/autocomplete');

const props1 = { value: 'hello', children: 'world', className: 'test' };
const el1 = React.createElement(Autocomplete.Autocomplete.Item, props1);

console.log('el1 props:', el1.props);
