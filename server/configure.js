import applyStaticsPaths from './statics';
import applyEnvMiddleWare from './middleware';

export default function configureServer(app, start) {
  applyEnvMiddleWare(app, start);
  applyStaticsPaths(app);
}
