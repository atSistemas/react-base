import express from 'express'
import serialize from 'serialize-javascript'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import configureStore  from '../src/store/configure-store'
import { fetchServerData } from '../src/shared/fetch-data'
import promiseMiddleware from '../src/middleware/promise'
import routes from '../src/routes'
import path from 'path'
import { applyMiddleware, createStore, combineReducers } from 'redux'
import rootReducer from '../src/reducers/';

const finalCreateStore = applyMiddleware(promiseMiddleware)( createStore );
const app = express()

app.use('/dist', express.static(path.join(__dirname, '../dist')))

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../webpack/webpack.config.prod')
const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(function (req, res) {

  const store = finalCreateStore(rootReducer);

  match({ routes , location: req.url }, (error, redirectLocation, renderProps) => {

    if ( error )
      return res.status(500).send( error.message );

    if ( redirectLocation )
      return res.redirect( 302, redirectLocation.pathname + redirectLocation.search );

    if ( renderProps == null )
      return res.status(404).send( 'Not found' );

    fetchServerData(store.dispatch, renderProps.components, renderProps.params)
      .then( () => {
          const mainView = renderToString((
            <Provider store={store}>
              <RouterContext {...renderProps}/>
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

function renderPage(content, store){
  return `
  <!doctype html>
	<html lang="utf-8">
  <html>
    <head>
    </head>
    <body>
    <div class="root">${content}</div>
      <script>window.$REACTBASE_STATE = ${store}</script>
      <script src="vendor.js"></script>
      <script src="bundle.js"></script>
    </body>
  </html>
  `
}

app.listen(8000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('[BASE] Server up on http://127.0.0.1:8000')
})
