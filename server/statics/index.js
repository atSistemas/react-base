import path from 'path';
import ENV from 'shared/env';

const commonStatics = [
  {route: '/mocks', dir: path.join(__dirname, '..', '..', 'app', 'api', 'mocks')}
];

const devStatics = [
  {route: '/', dir: path.join(__dirname, '..', '..', 'app')},
];

const prodStatics = [
  {route: '/', dir: path.join(__dirname, '..', '..', 'dist')},
  {route: '/assets', dir: path.join(__dirname, '..', '..', 'dist', 'assets')},
];

const envStatics = (ENV === 'development') ? commonStatics.concat(devStatics) : commonStatics.concat(prodStatics);
const statics = envStatics;
export default statics;
