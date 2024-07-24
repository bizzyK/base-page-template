/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs", "autodocs"]
};
export const parameters = {
  // Add other parameters if needed
  docs: { inlineStories: true },
};

// Add other configurations if needed
export default preview;
