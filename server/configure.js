import applyStaticsPaths from './statics';
import applyEnvMiddleWare from './middleware';

export default function configureServer(app) {
  applyEnvMiddleWare(app);
  applyStaticsPaths(app);
}
