import { createStore } from 'redux'
import basicReducer from '../../reducers/basic'

let store = createStore(basicReducer, [ 'Use Redux' ])

export default store
