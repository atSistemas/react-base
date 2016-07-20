import webpack from 'webpack';
import consoleHelper from '../helpers/console';
import minimist from 'minimist';
import babelConfig from '../../../webpack/webpack.config.babel.js';

const envAliases = {
  dev: 'development',
  pro: 'production'
};

const build = (env) => {

  env = envAliases[env] || env || envAliases.pro;
  process.env['NODE_ENV'] = env || process.env.NODE_ENV;

  console.log(consoleHelper.line(`Building application for ${env} environment...`));

  // returns a Compiler instance
  let compiler = webpack(babelConfig);

  compiler.run((err, stats) => {
    if (err) {
      console.log(consoleHelper.error("Application build failed:"));
      process.exit(err);
    }
    console.log(stats.toString({
      colors: true
    }));
  });
};

let args = minimist(process.argv.slice(2));
require.main === module ? build(args._.slice(1)) : module.exports = build;
