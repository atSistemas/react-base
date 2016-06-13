import webpack from 'webpack';

const config = require('../../webpack/webpack.config.babel');
const compiler = webpack(config);

const bundleStart = Date.now();

compiler.plugin('done', function() {
  console.log('[BASE] Bundled project in ' + (Date.now() - bundleStart) + 'ms!');
});

const applyProdMiddleware = function(){
  return [];
};

module.exports = applyProdMiddleware;
