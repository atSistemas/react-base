import * as dev from './webpack-dev-config';
import * as prod from './webpack-prod-config';

import ENV from '../src/base/shared/Env';

const objEnv = (ENV === 'development') ? dev : prod;

const getEnvConfig = () => {
  const envConfig = {};

  for (const prop in objEnv) {
    envConfig[prop] = objEnv[prop];
  }

  return envConfig;
};

export default getEnvConfig();
