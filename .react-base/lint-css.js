import stylelint from 'stylelint';
import consoleHelper from './console-helper';

const lintCss = (patterns) => {

  stylelint.lint({
    formatter: 'verbose',
    files: patterns || ['app/**/*.css']
  }).then(function (result) {

    let errors = 0;
    let warnings = 0;

    const processMessages = (result) => {
      result.warnings.map((warning) => {
        if (warning.severity === 'error') {
          errors++;
        } else {
          warnings++;
        }
      });
    };

    result.results.map(processMessages);

    if (result.errored) {
      console.log(consoleHelper.error(`Stylesheets linting: ${result.results.length} files, ${errors} error(s), ${warnings} warning(s).`));
      console.log(result.output);
      process.exit(errors);
    } else {
      console.log(consoleHelper.success(`Stylesheets linting: ${result.results.length} files, ${errors} error(s), ${warnings} warning(s).`));
    }
  });

};

let args = process.argv.slice(2);
require.main === module ? lintCss(...args) : module.exports = lintCss;
