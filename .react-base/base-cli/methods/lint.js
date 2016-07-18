import lintSrc from './lint-code';
import lintCss from './lint-styles';

const lint = (args) => {

    let lintType = args._.length ? args._[0].toLowerCase() : undefined;

    if (!lintType) {
        lintSrc();
        lintCss();
    } else if (lintType === 'code') {
        lintSrc();
    } else if (lintType === 'styles') {
        lintCss();
    }
};

let args = require('minimist')(process.argv.slice(2));
require.main === module ? lint(args) : module.exports = lint;
