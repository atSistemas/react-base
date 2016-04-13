import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'
import DevTools from 'redux-devtools'
import reducers from '../reducers/'

function configureStore(initialState) {
  return createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware,loggerMiddleware())
    )
  )
}

export default configureStore
