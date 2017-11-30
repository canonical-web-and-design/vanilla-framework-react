'use strict'
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const devConfig = require('../config/webpack.config.dev')
const prodConfig = require('../config/webpack.config.prod')

module.exports = (storybookBaseConfig, configType) => {
  let appConfig = prodConfig;
  if (configType === 'DEVELOPMENT') {
    const appConfig = devConfig;
  }
  storybookBaseConfig.module.rules = [
    ...storybookBaseConfig.module.rules,
    ...appConfig.module.rules,
  ];
  storybookBaseConfig.resolve = appConfig.resolve;

  if (configType === 'DEVELOPMENT') {
    const host = process.env.HOST || 'localhost';
    const port = process.env.PORT || 6006;
    storybookBaseConfig.plugins.push(new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://${host}:${port}
        `], // Intentional new line to pad output
      },
    }));
    storybookBaseConfig.devServer = {quiet: true};
  }

  return storybookBaseConfig;
};
