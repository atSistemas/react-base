import { devStatics, applyDevMiddleware } from './dev-middleware'
import { prodStatics, applyProdMiddleware } from './prod-middleware'

const ENV = process.env.NODE_ENV || 'development'
const envStatics = (ENV === 'development') ? devStatics: prodStatics

export function applyEnvMiddleWare(env, app){
  if(env === 'development'){
    applyDevMiddleware().forEach(function(middleware){
      app.use(middleware)
    })
  } else {
    applyProdMiddleware().forEach(function(middleware){
      app.use(middleware)
    })
  }
}
