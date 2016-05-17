import path from 'path'
import ENV from '../src/shared/env'

const commonStatics = [
  {route: '/mocks', dir: path.join(__dirname, '..', 'src', 'api', 'mocks')}
]

const devStatics = [
  {route: '/assets', dir: path.join(__dirname, '..', 'src', 'assets')},
]

const prodStatics = [
  {route: '/', dir: path.join(__dirname, '..', 'dist')},
  {route: '/assets', dir: path.join(__dirname, '..', 'dist', 'assets')},
]

const envStatics = (ENV === 'development') ? commonStatics.concat(devStatics) : commonStatics.concat(prodStatics)
const statics = envStatics
export default statics
