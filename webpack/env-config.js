import { devContext, devPlugins, devEntries, devLoaders } from './webpack-dev-config';
import { prodContext, prodPlugins, prodEntries, prodLoaders } from './webpack-prod-config';
import ENV from '../app/shared/Env';

export default function getEnvConfig(){
  return {
    context : (ENV === 'development') ? devContext: prodContext,
    plugins : (ENV === 'development') ? devPlugins: prodPlugins,
    entries : (ENV === 'development') ? devEntries: prodEntries,
    loaders: (ENV === 'development') ? devLoaders: prodLoaders
  };
}
