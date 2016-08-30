import base from '../../src/base/';
import ENV from '../../src/base/shared/Env';

const envMiddleware = (base.env === 'development') ? require('./dev-middleware') : require('./prod-middleware');

export default function applyEnvMiddleWare(app){
  envMiddleware().forEach(function(middleware){
    const middlewareName = middleware.name || 'middleware';
    app.use(middleware);
    base.console.success(`Applied ${middlewareName}`);
  });
}
