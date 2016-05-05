const path = require('path');
const webpack = require('webpack');
const buildPath = path.resolve(__dirname, 'dist');
const clientPath = path.resolve(__dirname, 'src', 'client.js');

const devPlugins = [
  new webpack.NoErrorsPlugin(),
  new webpack.HotModuleReplacementPlugin()
]

const prodPlugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}})
];

var plugins = (process.env.NODE_ENV === 'production') ? prodPlugins : devPlugins

var config = {

  devtool: '#inline-source-map',

  entry: [
    clientPath,
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client'
  ],

  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/,
      include: __dirname,
      query: {
        presets: ["es2015", "stage-0", "react"]
      }
    }, {
      test: /\.css$/,
      loader: "style!css",
    }, ]
  },
  plugins: plugins
};

module.exports = config;
