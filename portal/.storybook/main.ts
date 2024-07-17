import type { StorybookConfig } from "@storybook/nextjs";
import webpack from 'webpack';

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
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.STORYBOOK_TIMEOUT": JSON.stringify(60000),
      })
    );

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [require.resolve('babel-preset-react-app')],
          },
        },
      ],
    });

    return config;
  },
  env: (config) => ({
    ...config,
    STORYBOOK_TIMEOUT: process.env.STORYBOOK_TIMEOUT || 60000,
  }),
};

export default config;
