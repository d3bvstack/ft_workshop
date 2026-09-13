const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Autocomplete = require('@base-ui/react/autocomplete');

const root = React.createElement(Autocomplete.Autocomplete.Root, { items: ['hello'] },
  React.createElement(Autocomplete.Autocomplete.Input),
  React.createElement(Autocomplete.Autocomplete.Portal, {},
    React.createElement(Autocomplete.Autocomplete.Positioner, {},
      React.createElement(Autocomplete.Autocomplete.Popup, {},
        React.createElement(Autocomplete.Autocomplete.List, {},
          ({ item }) => React.createElement(Autocomplete.Autocomplete.Item, { value: item, key: item }, item)
        )
      )
    )
  )
);
console.log('String:', ReactDOMServer.renderToString(root));
