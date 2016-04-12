import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import DevTools from 'redux-devtools'
import * as reducers from '../reducers/'

function configureStore(initialState) {
  return createStore(
    combineReducers(reducers),
    initialState,
    compose(
      applyMiddleware(thunkMiddleware,loggerMiddleware())
    )
  )
}

export default configureStore
