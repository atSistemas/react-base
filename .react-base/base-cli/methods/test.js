import Mocha from 'mocha';
import glob from 'glob-all';
import consoleHelper from '../helpers/console';
import minimist from 'minimist';

const test = (patterns, ignores) => {

  patterns = patterns ? patterns.split(',') : ["**/*.spec.js"];
  ignores = ignores ? ignores.split(',') : ['node_modules/**'];

  let dependencies = ['babel-register', 'ignore-styles'];
  dependencies.forEach((dependency) => require(dependency));

  return new Promise((resolve, reject) => {

    const mocha = new Mocha({
      ui: 'bdd',
      reporter: 'spec'
    });

    const files = glob.sync(patterns, {
      nodir: true,
      ignore: ignores
    });

    files.forEach(function (file) {
      mocha.addFile(file);
    });

    mocha.run(function (failures) {
      if (failures !== 0) {
        console.log(consoleHelper.error(failures + " tests failed"));
        reject(failures); // exit with non-zero status if there were failures
      }
      console.log(consoleHelper.success('All tests passed'));
      resolve();
    });
  });
};

let args = minimist(process.argv.slice(2));
require.main === module ? test.apply(this, args._.slice(1)) : module.exports = test;
