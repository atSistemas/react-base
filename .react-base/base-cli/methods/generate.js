import consoleHelper from '../helpers/console';
import minimist from 'minimist';
import yeomanEnv from 'yeoman-generator';

const generate = () => {

  const generator = yeomanEnv().create('./node_modules/generator-react-base');
  generator.destinationRoot(process.cwd());
  generator.run((err) => {
    if (err) {
      console.log(consoleHelper.error("Component generation failed:"));
      process.exit(err);
    }

		//run post generation scripts

  });

};

let args = minimist(process.argv.slice(2));
require.main === module ? generate.apply(this, args._.slice(1)) : module.exports = generate;
