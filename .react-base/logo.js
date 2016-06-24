'use strict';

const fs = require('fs');
const dir = __dirname + '/logo.txt';

const logo = () => {
  console.log(fs.readFileSync(dir, 'utf-8'));
};

let args = process.argv.slice(2);
require.main === module ? logo(...args) : module.exports = logo;
