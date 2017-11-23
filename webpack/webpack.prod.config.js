import path from 'path';
import webpack from 'webpack';
import copyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import * as common from './webpack.common.config';

export const cache = true;
export const devtool = 'cheap-module-source-map';
export const context = common.context;
export const resolve = common.resolve;
export const entry = {
  app: common.clientPath,
  vendor: common.entry.vendor
};

export const output = {
  path: common.assetsPath,
  publicPath: '/',
  library: '[name]',
  filename: '[name].[hash].js',
  sourceMapFilename: '[name].map',
  chunkFilename: '[name].[hash].chunk.js',
};


export const module = {
  rules: common.module.rules.concat([
    {
      test: [/\.jsx?$/],
      include: [/src/],
      loader: 'babel-loader',
      exclude: [/node_modules/, /dist/, /server/],
      query: {
        cacheDirectory: true,
        presets: ['es2015', 'stage-0', 'react']
      }
    },
    {
      test: /\.css/,
      exclude: /node_modules/,

      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[hash:base64:4]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => common.postcss.concat(
                require('postcss-clean')(),
                require('autoprefixer')()
              )
            }
          }
        ]
      })
    }
  ])
};

export const plugins = [
  new webpack.DefinePlugin({'process.env': { NODE_ENV: JSON.stringify('production')}}),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname),
    manifest: require('../dist/dlls/vendor-manifest.json')
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    chunks: ['app'],
    minChunks: module => /node_modules/.test(module.resource)
  }),
  new copyWebpackPlugin([{ from: 'src/app/assets', to: '../assets' }]),
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.optimize.UglifyJsPlugin({compressor: { warnings: false }, output: { comments: false }}),
  new ExtractTextPlugin({ filename: 'styles.[contenthash].css', allChunks: true })
].concat(common.plugins);
