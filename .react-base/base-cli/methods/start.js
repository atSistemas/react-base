import consoleHelper from '../helpers/console';
import scriptRunner from '../helpers/script-runner';
import minimist from 'minimist';
import envAliases from '../environment-aliases';

const start = (env) => {

  env = envAliases[env] || env || envAliases.pro;
  process.env['NODE_ENV'] = env || process.env.NODE_ENV;

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

let args = minimist(process.argv.slice(2));
require.main === module ? start.apply(this, args._.slice(1)) : module.exports = start;
