import base from '../../src/base/';

const envMiddleware = (base.env === 'development') ? require('./dev-middleware') : require('./prod-middleware');

export default function applyEnvMiddleWare(app, callback) {
  let serverUp = false;

  envMiddleware().forEach(function(middleware) {
    const middlewareName = middleware.name || 'middleware';
    app.use(middleware);

    base.console.success(`Applied ${middlewareName} middleware`);

    if (base.env == 'production' && !serverUp) {
      callback.call(this, app);
      serverUp = true;
    } else {
      if (middleware.waitUntilValid) {
        middleware.waitUntilValid(function() {
          callback.call(this, app);
        });
      }
    }
  });
}
