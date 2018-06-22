const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = (storybookBaseConfig, env, defaultConfig) => {
  const host = process.env.HOST || 'localhost';
  const port = process.env.PORT || 8102;
  storybookBaseConfig.plugins.push(new FriendlyErrorsPlugin({
    compilationSuccessInfo: {
      messages: [`Your application is running here: http://${host}:${port}
      `], // Intentional new line to pad output
    },
  }));
  storybookBaseConfig.devServer = {quiet: true};

  return storybookBaseConfig;
};
