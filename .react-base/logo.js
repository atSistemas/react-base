'use strict';

const fs = require('fs');
const dir = __dirname + '/logo.txt';

const logo = () => {
  console.log(fs.readFileSync(dir, 'utf-8'));
};

require.main === module ? logo() : module.exports = logo;
