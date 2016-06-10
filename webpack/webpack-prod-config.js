import path from 'path';
import webpack from 'webpack';
import copyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const mainPath = path.resolve(__dirname, '..');
const clientPath = path.resolve(__dirname, '..', 'app','client/');

export const prodContext = path.resolve(__dirname, '../app');

export const prodPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
  new copyWebpackPlugin([{ from: '../app/assets', to: 'assets' }]),
  new webpack.optimize.UglifyJsPlugin({compressor: { warnings: true }}),
  new ExtractTextPlugin('bundle.css'),
  function(){
    this.plugin("done", function(stats){
      if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1){
        throw new Error(stats.compilation.errors);
      }
    });
  }
];

export const prodEntries = {
  app: clientPath,
  common: [
    'react',
    'redux',
    'react-dom',
    'react-redux',
    'react-router',
    'isomorphic-fetch',
    'immutable'
  ]
};

export const prodLoaders = [
  { test: [/\.js$/, /\.jsx$/],loader: 'babel',exclude: /node_modules/,include: mainPath, query: { presets: ["es2015", "stage-0", "react"] }},
  { test: /\.css/, loader: ExtractTextPlugin.extract('style-loader',  'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:4]!postcss-loader')}
];
