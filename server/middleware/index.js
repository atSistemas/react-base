import { symbols, color } from '../shared/console';
import { applyDevMiddleware } from './dev-middleware';
import { applyProdMiddleware } from './prod-middleware';
import ENV from 'app/shared/env';

const envMiddleware = (ENV === 'development') ? applyDevMiddleware : applyProdMiddleware;

export default function applyEnvMiddleWare(env, app){
  envMiddleware().forEach(function(middleware){
    const middlewareName = middleware.name || 'middleware';
    app.use(middleware);
    console.log('[BASE] ' + color('success', symbols.ok) + ' Applied ' + middlewareName);
  });
}
