import path from 'path';
import webpack from 'webpack';
import copyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { symbols, color } from '../src/base/shared/console';

const mainPath = path.resolve(__dirname, '..');
const clientPath = path.resolve(__dirname, '../src/base/client/');

export const devTool = 'cheap-module-source-map';

export const context = path.resolve(__dirname, '../src/app');

export const plugins = [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"production"'}}),
  new webpack.NoErrorsPlugin(),
  new ExtractTextPlugin('bundle.css'),
  new webpack.optimize.OccurenceOrderPlugin(true),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({compressor: { warnings: false }, output: {comments: false}}),
  new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
  new copyWebpackPlugin([{ from: 'assets', to: 'assets' }]),
  function() {
    this.plugin('done', function(stats) {
      if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1) {
        console.log('[BASE] ' + color('error', symbols.error) + stats.compilation.errors);
      }
    });
  }
];

export const entries = {
  app: clientPath,
  common: [
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

export const loaders = [
  { test: [/\.jsx?$/],loader: 'babel-loader',exclude: /node_modules/, include: mainPath, query: { presets: ['es2015', 'stage-0', 'react'] }},
  { test: /\.css/, loader: ExtractTextPlugin.extract('style-loader',  'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:4]!postcss-loader')}
];

export const postCss = (webpack) =>
  [
    require('postcss-import')({ addDependencyTo: webpack }),
    require('postcss-modules-extract-imports'),
    require('postcss-url')(),
    require('postcss-cssnext')(),
    require('postcss-reporter')(),
    require('cssnano')({autoprefixer: false})
  ];
