import { applyDevMiddleware } from './dev-middleware'
import { applyProdMiddleware } from './prod-middleware'
import ENV from '../src/shared/env'

const envMiddleware = (ENV === 'development') ? applyDevMiddleware : applyProdMiddleware

export default function applyEnvMiddleWare(env, app){
  envMiddleware().forEach(function(middleware){
    const middlewareName = middleware.name || 'middleware'
    console.log('[BASE] Applying ' + middlewareName)
    app.use(middleware)
  })
}
