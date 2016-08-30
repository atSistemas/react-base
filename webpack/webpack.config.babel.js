import base from '../src/base/';
import * as development from './webpack-dev-config';
import * as production from './webpack-prod-config';

module.exports = ( base.env === 'development' ) ? development : production;
