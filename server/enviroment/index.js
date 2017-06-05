import { env } from 'base';
import * as development from './development';
import * as production from './production';

const envConf = (env === 'production') ? production : development;

export default envConf;
