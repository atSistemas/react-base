import lintSrc from './lint-code';
import lintCss from './lint-styles';
import minimist from 'minimist';

const lint = (args) => {

  let lintType = args ? args.toLowerCase() : undefined;

  if (!lintType) {
    lintSrc();
    lintCss();
  } else if (lintType === 'js' || lintType === 'javascript') {
    lintSrc();
  } else if (lintType === 'styles') {
    lintCss();
  }
};

let args = minimist(process.argv.slice(2));
require.main === module ? lint(args._.slice(1)) : module.exports = lint;
