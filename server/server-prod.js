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
import * as rootReducer from '../src/reducers/';

const finalCreateStore = applyMiddleware(promiseMiddleware)( createStore );
const reducer = combineReducers({...rootReducer})
const store = finalCreateStore(reducer);

const app = express()

app.use('/dist', express.static(path.join(__dirname, '../dist')))

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../webpack.config.prod')
const compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))


function renderPage(content, store){
  return `
  <!doctype html>
	<html lang="utf-8">
  <html>
    <head>
    </head>
    <body>
    <div class="root">${content}</div>
      <script>window.__INITIALSTATE__ = ${store}</script>
      <script src='/dist/vendor.js' />
      <script src='/dist/bundle.js' />
    </body>
  </html>
  `
}

app.use(function (req, res) {

  match({ routes , location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (renderProps) {
        fetchServerData(store.dispatch, renderProps.components, renderProps.params)
        .then( ()=> {
            const mainView = renderToString(
              <Provider store={store}>
                <RouterContext {...renderProps}/>
              </Provider>
            )
            let state = JSON.stringify( store.getState() )
            let page = renderPage( mainView, state )
            return page
        })
        .then( page => res.status(200).send(page) )
        .catch( err => res.end(err.message) );

    }
  })
})

app.listen(8000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('[BASE] Server up on http://127.0.0.1:8000')
})
