import {
  CLIEngine
} from 'eslint';
import consoleHelper from './console-helper';

const lintSrc = (patterns, ignores) => {

  return new Promise((resolve, reject) => {
    const cli = new CLIEngine({
      //envs: ["browser", "mocha"],
      useEslintrc: true,
      extensions: patterns || ['.js', '.jsx'],
      ignorePattern: ignores || ['app/**/*.spec.js']
    });

    // lint myfile.js and all files in lib/
    let report = cli.executeOnFiles(['app/']);
    const formatter = cli.getFormatter();
    if (report.errorCount !== 0) {
      console.log(consoleHelper.error(`Source code linting: ${report.results.length} files, ${report.errorCount} error(s), ${report.warningCount} warning(s).`));
      console.log(formatter(report.results));
      reject(report.errorCount);
    } else {
      console.log(consoleHelper.success(`Source code linting: ${report.results.length} files, ${report.errorCount} error(s), ${report.warningCount} warning(s).`));
      if (report.warningCount !== 0) console.log(formatter(report.results));
      resolve();
    }
  });
};

let args = process.argv.slice(2);
require.main === module ? lintSrc(...args) : module.exports = lintSrc;
