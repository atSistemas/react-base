import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import DevTools from 'redux-devtools'
import basicReducer from '../reducers/basic'

function configureStore(initialState) {
  return createStore(
    basicReducer,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware,loggerMiddleware())
    )
  )
}

export default configureStore
