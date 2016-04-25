import httpProxy from 'http-proxy'
import bundle from './bundle'

export default function(app, isProd){

  let proxy = httpProxy.createProxyServer({
    changeOrigin: true
  });

    bundle(isProd);

    app.all('/dist/*', function (req, res) {
      proxy.web(req, res, {
          target: 'http://localhost:8080'
      });
    });

  proxy.on('error', function(e) {
    console.log('[BASE] Could not connect to proxy.');
  });

}
