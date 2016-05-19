import path from 'path'
import React from 'react'
import express from 'express';
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { Router, RouterContext, match } from 'react-router'
import { applyMiddleware, createStore, combineReducers } from 'redux'

import statics from './statics'
import routes from '../src/routes'
import ENV from '../src/shared/env'
import renderPage from './render-page'
import rootReducer from '../src/reducers/'
import applyEnvMiddleWare from './middleware'
import requestMiddleware from '../src/middleware/request'
import fetchRequiredActions from '../src/shared/fetch-data'

const port = 8000
const app = express()
const host = '0.0.0.0'
const context = 'server'
const envMiddleware = applyEnvMiddleWare(ENV, app)
const serverStore = applyMiddleware( requestMiddleware )( createStore )

statics.map(function(staticPath){
  app.use(staticPath.route, express.static(staticPath.dir))
  console.log('[BASE] ✓ Applied static path ' + staticPath.route)
})

app.use(function (req, res) {

  const store = serverStore(rootReducer)

  match({ routes , location: req.url }, (error, redirectLocation, renderProps) => {

    if ( error ) return res.status(500).send( error.message );
    if ( redirectLocation ) return res.redirect( 302, redirectLocation.pathname + redirectLocation.search )
    if ( renderProps == null ) return res.status(404).send( 'Not found' )

    fetchRequiredActions(store.dispatch, renderProps.components, renderProps.params, context)
      .then(() => {
          const mainView = renderToString((
            <Provider store={ store }>
              <RouterContext { ...renderProps }/>
            </Provider>
          ))

          let state = JSON.stringify( store.getState() )
          let page = renderPage( ENV, mainView, state )
          return page
      })
      .then( page => res.status(200).send(page) )
      .catch( err => res.end(err.message) )
    })
})

app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return;
  }
  console.log('[BASE] ✓ Server up on http://localhost:' +  port)
})
