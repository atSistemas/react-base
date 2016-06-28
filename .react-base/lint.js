//npm run logo && node_modules/eslint/bin/eslint.js app --ignore-pattern '*.spec.js'  --ext .js --ext .jsx

import lintSrc from './lint-src';
import lintCss from './lint-css';

const lint = (lintType) => {
  if (!lintType) {
    lintSrc();
    lintCss();
  } else if (lintType === 'src') {
    lintSrc();
  } else {
    lintCss();
  }
};

let args = process.argv.slice(2);
require.main === module ? lint(...args) : module.exports = lint;
