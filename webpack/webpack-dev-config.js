import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin'
const mainPath = path.resolve(__dirname, '..');
const clientPath = path.resolve(__dirname, '..', 'src', 'client/');

export const devPlugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.DedupePlugin(),
  new ExtractTextPlugin('bundle.css'),
];

export const devEntries = [
  clientPath,
  'webpack/hot/dev-server',
  'webpack-hot-middleware/client'
];

export const devLoaders = [
  { test: [/\.js$/, /\.jsx$/],loader: 'babel',exclude: /node_modules/,include: mainPath, query: { presets: ["react-hmre", "es2015", "stage-0", "react"] }},
  { test: /\.css/, loader: ExtractTextPlugin.extract('style-loader',  'css-loader?module','&localIdentName=[name]__[local]___[hash:base64:5]','!postcss-loader')}
];
