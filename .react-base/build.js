'use strict';

const webpack = require('webpack'),
  consoleHelper = require('./console-helper');

const build = (env) => {

  process.env['NODE_ENV'] = env || process.env.NODE_ENV;

  // returns a Compiler instance
  let compiler = webpack(require('../webpack/webpack.config.babel.js'));

  compiler.run((err, stats) => {
    if (err) {
      console.log(consoleHelper.error("Application build failed:"));
      process.exit(err);
    }
    console.log(stats.toString({
      colors: true
    }));
  });
};

let args = process.argv.slice(2);
require.main === module ? build(...args) : module.exports = build;
