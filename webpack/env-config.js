import { devPlugins, devEntries, devLoaders } from './webpack-dev-config';
import { prodPlugins, prodEntries, prodLoaders } from './webpack-prod-config';
import ENV from '../app/shared/env';

export default function getEnvConfig(){
  return {
    plugins : (ENV === 'development') ? devPlugins: prodPlugins,
    entries : (ENV === 'development') ? devEntries: prodEntries,
    loaders: (ENV === 'development') ? devLoaders: prodLoaders
  };
}
