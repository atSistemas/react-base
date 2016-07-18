import fs from 'fs';
import path from 'path';

const dir = path.normalize(path.join(__dirname + '/../assets/logo.txt'));

const logo = () => {
  console.log(fs.readFileSync(dir, 'utf-8'));
};

require.main === module ? logo() : module.exports = logo;
