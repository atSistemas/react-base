import path from 'path'
const ENV = process.env.NODE_ENV || 'development'
const commonStatics = [
  {route: '/assets', dir: path.join(__dirname, '..', 'src', 'assets')},
  {route: '/mocks', dir: path.join(__dirname, '..', 'src', 'api', 'mocks')}
]
const devStatics = []
const prodStatics = []
const envStatics = (ENV === 'development') ? commonStatics.concat(devStatics) : commonStatics.concat(prodStatics)

export const statics = envStatics
