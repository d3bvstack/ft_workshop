import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Search } from './components/Search.tsx';

const root = React.createElement(Search.Root, { items: ['hello'], open: true },
  React.createElement(Search.InputGroup, {},
    React.createElement(Search.Input)
  ),
  React.createElement(Search.Portal, {},
    React.createElement(Search.Positioner, {},
      React.createElement(Search.Popup, {},
        React.createElement(Search.List, {},
          ({ item }) => React.createElement(Search.Item, { value: item, key: item }, item)
        )
      )
    )
  )
);
console.log('String:', ReactDOMServer.renderToString(root));
