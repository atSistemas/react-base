//"start": "npm run logo && cross-env NODE_ENV=development node server/",
import consoleHelper from './console-helper';
import childProcess from 'child_process';

const start = () => {

  let process = childProcess.fork('./server/index.js');

  // listen for errors as they may prevent the exit event from firing
  process.on('error', function (err) {
    console.log(consoleHelper.error("Error launching development environment:"));
    console.error(err);
    process.exit(0);
  });

  process.on('exit', function (code) {
    let err = code === 0 ? null : new Error('exit code ' + code);
    if (err) {
      console.log(consoleHelper.error("Error launching development environment:"));
      console.error(err);
    } else {
      console.log(consoleHelper.line("Development server terminated"));
    }
  });

};

let args = process.argv.slice(2);
require.main === module ? start(...args) : module.exports = start;
