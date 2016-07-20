import fs from 'fs';
import path from 'path';
import minimist from 'minimist';
import logo from './logo';
import consoleHelper from './helpers/console';

const argv = minimist(process.argv.slice(2));
const subcommand = argv._[0].toLowerCase();

consoleHelper.clear();
logo();

fs.exists(path.join(__dirname, 'methods', `${subcommand}.js`), (exists) => {
  if (exists) {
    argv._ = argv._.slice(1);
    require(`./methods/${subcommand}`).apply(this, argv._);
  } else {
    if (subcommand !== 'logo') {
      console.log(consoleHelper.error(`Unknown command: ${subcommand}`));
    }
  }
});
