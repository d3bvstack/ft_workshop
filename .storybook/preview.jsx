/** @type { import('@storybook/nextjs-vite').Preview } */
import '../styles/globals.css';

const preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
};

export default preview;
