import { symbols, color } from '../shared/console';
import ENV from 'shared/Env';

const envMiddleware = (ENV === 'development') ? require('./dev-middleware') : require('./prod-middleware');

export default function applyEnvMiddleWare(env, app){
  envMiddleware().forEach(function(middleware){
    const middlewareName = middleware.name || 'middleware';
    app.use(middleware);
    console.log('[BASE] ' + color('success', symbols.ok) + ' Applied ' + middlewareName);
  });
}
