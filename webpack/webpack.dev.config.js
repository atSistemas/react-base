import webpack from 'webpack';
import path from 'path';
import * as common from './webpack.common.config';

export const cache = true;
export const devtool = 'cheap-source-map';
export const context = common.context;
export const resolve = common.resolve;
export const entry = {
  app: [
    common.clientPath,
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
  ],
};

export const output = {
  path: common.buildPath,
  publicPath: '/',
  library: '[name]',
  filename: '[name].js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[name].chunk.js',
};

export const module = {
  rules: [
    {
      test: [/\.jsx?$/],
      include: [/src/],
      loader: 'babel-loader',
      exclude: [/node_modules/, /dist/, /server/],
      query: {
        cacheDirectory: true,
        presets: ['react-hmre', 'es2015', 'stage-0', 'react']
      }
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 1,
            localIdentName: '[name]__[local]-[hash:base64:4]'
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: (loader) => common.postcss
          }
        }
      ]
    }
  ]
};

export const plugins = [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"development"'}}),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.DllReferencePlugin({
    context: common.context,
    manifest: require(`${common.dllPath}/vendor-manifest.json`)
  }),
]
  .concat(common.plugins);
