import path from 'path';
import getEnvConfig from './env-config';

const envConfig = getEnvConfig();
const buildPath = path.resolve(__dirname, '..', 'dist');

const webpackConfig = {

  devtool: envConfig.devTool,

  entry: envConfig.entries,

  context: envConfig.context,

  plugins: envConfig.plugins,

  module: {
    loaders: envConfig.loaders
  },

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    alias: {
      'app': path.resolve(__dirname, '../app'),
      'components': path.resolve(__dirname, '../app/components'),
      'containers': path.resolve(__dirname, '../app/containers'),
      'shared': path.resolve(__dirname, '../app/shared'),
      'store': path.resolve(__dirname, '../app/store')
    }
  },

  postcss: function (webpack) {
    return [
      require("postcss-import")({ addDependencyTo: webpack }),
      require("postcss-url")(),
      require("postcss-cssnext")(),
      require("postcss-reporter")()
    ];
  }
};

module.exports = webpackConfig;
