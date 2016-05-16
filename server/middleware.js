import { devStatics, applyDevMiddleware } from './dev-middleware'
import { prodStatics, applyProdMiddleware } from './prod-middleware'

const ENV = process.env.NODE_ENV || 'development'
const envStatics = (ENV === 'development') ? devStatics: prodStatics

export function applyEnvMiddleWare(env, app){
  if(env === 'development'){
    applyDevMiddleware().map(function(middleware){
      app.use(middleware)
    })
  } else {
    applyProdMiddleware().map(function(middleware){
      app.use(middleware)
    })
  }
}
