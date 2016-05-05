import path from 'path';
import React from 'react'
import express from 'express';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server'
import { Router, RouterContext, match } from 'react-router';
import { applyMiddleware, createStore, combineReducers } from 'redux'

import routes from '../src/routes'
import renderPage from './template'
import rootReducer from '../src/reducers/';
import promiseMiddleware from '../src/middleware/promise'
import { fetchServerData } from '../src/shared/fetch-data'
import { WebpackDevMiddleware, WebpackHotMiddleware } from './bundler'

const port = 8000
const host = '0.0.0.0'
const app = express()
const serverStore = applyMiddleware( promiseMiddleware )( createStore );

app.use(WebpackDevMiddleware);
app.use(WebpackHotMiddleware);
app.use('/assets', express.static(path.join(__dirname, '..', 'src', 'assets')))
app.use('/mocks', express.static(path.join(__dirname, '..', 'src', 'api', 'mocks')))

app.use(function (req, res) {

  const store = serverStore(rootReducer);

  match({ routes , location: req.url }, (error, redirectLocation, renderProps) => {

    if ( error ) return res.status(500).send( error.message );
    if ( redirectLocation ) return res.redirect( 302, redirectLocation.pathname + redirectLocation.search );
    if ( renderProps == null ) return res.status(404).send( 'Not found' );

    fetchServerData(store.dispatch, renderProps.components, renderProps.params)
      .then(() => {
          const mainView = renderToString((
            <Provider store={ store }>
              <RouterContext { ...renderProps }/>
            </Provider>
          ))

          let state = JSON.stringify( store.getState() )
          let page = renderPage( mainView, state )
          return page
      })
      .then( page => res.status(200).send(page) )
      .catch( err => res.end(err.message) );
    })
})

app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('[BASE] Server up on http://'+ host + ':' +  port)
})
