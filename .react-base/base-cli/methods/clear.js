import del from 'del';
import consoleHelper from '../helpers/console';

const clear = () => {
  del(['dist/', 'build/']).then(() => {
    console.log(consoleHelper.success(`Project cleaning completed`));
  }).catch(err => {
    console.log(consoleHelper.error("Application build failed:"));
    process.exit(err);
  });

};

require.main === module ? clear() : module.exports = clear;
