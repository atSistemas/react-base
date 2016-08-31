import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import copyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

import * as common from './webpack.common.config';

export const devtool = 'cheap-module-source-map';

export const entry = {
  app: common.clientPath,
  vendor: [
    'react',
    'redux',
    'react-dom',
    'immutable',
    'classnames',
    'react-redux',
    'react-router',
    'isomorphic-fetch'
  ]
};

export const context = common.context;

export const plugins = [
  new ProgressBarPlugin({
    format: `[BASE] Bundeling Production Build... [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
    clear: false
  }),
  new webpack.DllReferencePlugin({
    context: path.join(__dirname, '...'),
    manifest: require(`${common.manifestPath}/vendor-manifest.json`)
  }),
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"production"'}}),
  new copyWebpackPlugin([{ from: 'app/assets', to: '../dist/assets' }]),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('bundle.css'),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({compressor: { warnings: false }, output: {comments: false}}),
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
  common.compileError
];

export const postcss = (webpack) => [
  require('postcss-import')({ addDependencyTo: webpack }),
  require('postcss-modules-extract-imports'),
  require('postcss-url')(),
  require('postcss-nested')(),
  require('postcss-cssnext')(),
  require('postcss-reporter')(),
  require('cssnano')({autoprefixer: false})
];

export const module = {
  loaders: [
    { test: [/\.jsx?$/],loader: 'babel-loader',exclude: [/node_modules/, /webpack/, /dist/, /server/], include: common.mainPath, query: { cacheDirectory: true, presets: ['es2015', 'stage-0', 'react'] }},
    { test: /\.css/, loader: ExtractTextPlugin.extract('style-loader',  'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:4]!postcss-loader')}
  ]
};

export const output = common.output;

export const resolve = common.resolve;
