import webpack from 'webpack';
import copyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import * as common from './webpack.common.config';

export const cache = true;
export const devtool = 'cheap-module-source-map';
export const output = common.output;
export const context = common.context;
export const resolve = common.resolve;
/*
* TODO: Se necesita suar este plugin https://github.com/postcss/postcss-loader#postcss-config
* */
export const postcss = common.postcss;

export const entry = {
  app: common.clientPath,
  vendor: common.entry.vendor
};

export const module = {
  rules: [
    {
      test: [/\.jsx?$/],
      include: [/src/],
      use: {
        loader:'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      exclude: [/node_modules/, /dist/, /server/]
    },
    {
      test: /\.css/,
      use: {
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: [{
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]__[local]-[hash:base64:4]"
            }
          },{
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return postcss;
              }
            }
          }],
        })
      }
    }
  ]
};

export const plugins = [
  new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"production"'}}),
  new copyWebpackPlugin([{ from: 'src/app/assets', to: '../dist/assets' }]),
  new webpack.NoErrorsPlugin(),
  new webpack.optimize.UglifyJsPlugin({compressor: { warnings: false }, output: {comments: false}}),
  new ExtractTextPlugin({
    filename: 'bundle.css',
    disable: false,
    allChunks: true
  }),
]
.concat(common.plugins);
