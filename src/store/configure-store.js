import React from 'react'

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import * as reducers from '../reducers/itemsReducer'

function configureStore(history, initialState) {

    const reducer = combineReducers({
    ...reducers,
    routing: routerReducer
  })

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
      )
    )
  )

  return store

}
/*
const store = compose(
  applyMiddleware(thunkMiddleware,loggerMiddleware()),
  reduxReactRouter({
    routes
  })
)(createStore)(rootReducer);
*/
export default configureStore
