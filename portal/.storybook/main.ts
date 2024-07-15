import type { StorybookConfig } from "@storybook/nextjs";
import webpack from 'webpack'; // Add this line to import webpack

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  webpackFinal: async (config, { configType }) => {
    // Customize the Webpack configuration here
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.STORYBOOK_TIMEOUT": JSON.stringify(60000),
      })
    );

    return config;
  },
};

export default config;
