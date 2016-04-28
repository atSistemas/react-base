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




const HTML = ({ content, store }) => (
  <html>
    <head>
    </head>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: content }}/>
      <script dangerouslySetInnerHTML={{ __html: `window.__INITIALSTATE__=${serialize(store.getState())};` }}/>
      <script src='/dist/vendor.js' />
      <script src='/dist/bundle.js' />
    </body>
  </html>
)

app.use(function (req, res) {

  //const memoryHistory = createMemoryHistory(req.path)
  //let store = configureStore(memoryHistory )
  //const history = syncHistoryWithStore(memoryHistory, store)
  //store = configureStore(memoryHistory, store.getState())

  match({ routes , location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (renderProps) {
        fetchServerData(store.dispatch, renderProps.components, renderProps.params)
        .then( ()=> {
            const content = renderToString(
              <Provider store={store}>
                <RouterContext {...renderProps}/>
              </Provider>
            )
            res.end('<!doctype html>\n' + renderToString(<HTML content={content} store={store}/>))
        }).catch(function (error){

        })
    }
  })
})

app.listen(8000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('[BASE] Server up on http://127.0.0.1:3000')
})
