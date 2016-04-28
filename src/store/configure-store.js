import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import promiseMiddleware from '../middleware/promise';

import rootReducer from '../reducers'

function configureStore(history, initialState) {

  const enchancer = compose(
    applyMiddleware(
      thunkMiddleware,
      promiseMiddleware,
      routerMiddleware(history),
      createLogger({level: 'info',collapsed: true})
    )
  )

  const store = createStore(rootReducer, initialState, enchancer)

  if (module.hot) {
	module.hot.accept('../reducers', () => {
	  const nextRootReducer = require('../reducers');
	  store.replaceReducer(nextRootReducer);
	});
  }

  return store

}

export default configureStore
