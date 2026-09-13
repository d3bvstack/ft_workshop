/** @type { import('@storybook/nextjs-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  docs: {
    autodocs: 'tag',
  },
  framework: "@storybook/nextjs-vite",
  telemetry: false,
  viteFinal: async (config) => {
    const { default: tailwind } = await import('@tailwindcss/vite');
    config.plugins = config.plugins || [];
    config.plugins.push(tailwind());
    return config;
  },
};

export default config;
