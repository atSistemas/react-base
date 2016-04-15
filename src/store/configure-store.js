import thunkMiddleware from 'redux-thunk'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

import * as rootReducer from '../reducers'
import DevTools from '../containers/dev-tools';

const initialState = {}

function configureStore(history, initialState) {

  const reducer = combineReducers({
    ...rootReducer,
    routing: routerReducer
  })

  const enchancer = compose(
    DevTools.instrument(),
    applyMiddleware(thunkMiddleware, routerMiddleware(history))
  )

  const store = createStore(reducer, initialState, enchancer)

  return store

}

export default configureStore
