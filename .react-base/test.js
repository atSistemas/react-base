'use strict';

const Mocha = require('mocha'),
  glob = require('glob-all'),
  consoleHelper = require('./console-helper');

const test = (patterns, dependencies) => {

  dependencies.forEach((dependency) => require(dependency));

  const mocha = new Mocha({
    ui: 'bdd',
    reporter: 'spec'
  });

  const files = glob.sync(patterns, {
    nodir: true,
    ignore: ['node_modules/**']
  });

  files.forEach(function (file) {
    mocha.addFile(file);
  });

  mocha.run(function (failures) {
    if (failures !== 0) {
      console.log(consoleHelper.error(failures + " tests failed"));
      process.exit(failures); // exit with non-zero status if there were failures
    }
    console.log(consoleHelper.success('All tests passed'));
    process.exit(0);
  });

};

let args = process.argv.slice(2);
require.main === module ? test(...args) : module.exports = test;
