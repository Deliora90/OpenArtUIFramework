const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.alias['@styles'] = path.resolve(__dirname, '../src/styles/');
    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      '../src/components/'
    );
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/utils/');
    config.resolve.alias['@icons'] = path.resolve(__dirname, '../src/icons/');
    return config;
  },
};
