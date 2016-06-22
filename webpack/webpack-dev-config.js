import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const mainPath = path.resolve(__dirname, '..');
const clientPath = path.resolve(__dirname, '..', 'app', 'client/');

export const devTool = 'eval';

export const devContext = path.resolve(__dirname, '../app');

export const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin('bundle.css', { allChunks: true }),
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"development"'}}),
  function(){
    this.plugin("done", function(stats){
      if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') == -1){
        throw new Error(stats.compilation.errors);
      }
    });
  }
];

export const devEntries = [
  clientPath,
  'webpack/hot/dev-server',
  'webpack-hot-middleware/client'
];

export const devLoaders = [
  { test: [/\.js$/, /\.jsx$/],loader: 'babel-loader',exclude: /node_modules/,include: mainPath, query: { presets: ["react-hmre", "es2015", "stage-0", "react"] }},
  { test: /\.css$/, loader: 'style-loader!css-loader?modules=true&sourceMap&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:4]!postcss-loader'}
];
