var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack/webpack.config.js');
var webpackConfigProd = require('../webpack/webpack.config.prod.js');
var path = require('path');
var fs = require('fs');
var mainPath = path.resolve(__dirname, '..', 'src', 'main.js');

module.exports = function (isProd) {

  var bundleStart = null;
  var config = isProd ? webpackConfigProd : webpackConfig;
  var compiler = Webpack(config);

  compiler.plugin('compile', function() {
    console.log('[BASE] Bundling...');
    bundleStart = Date.now();
  });

  compiler.plugin('done', function() {
    console.log('[BASE] Bundled proyect in ' + (Date.now() - bundleStart) + 'ms!');
  });

  var bundler = new WebpackDevServer(compiler, {

    publicPath: '/dist/',
    hot: true,
    quiet: false,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  bundler.listen(8080, 'localhost', function () {
    console.log('[BASE] Bundling project...');
  });

};
