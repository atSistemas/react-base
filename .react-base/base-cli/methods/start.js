import consoleHelper from '../helpers/console';
import scriptRunner from '../helpers/script-runner';

const start = () => {

  scriptRunner('./server/index.js', (err) => {
    if (!err) {
      console.log(consoleHelper.line("Development server terminated"));
      process.exit(0);
      return;
    }
    console.log(consoleHelper.error("Error launching development environment:"));
    console.error(err);
    process.exit(err);
  });

};

let args = process.argv.slice(2);
require.main === module ? start(...args) : module.exports = start;
