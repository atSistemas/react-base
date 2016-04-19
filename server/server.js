
import express from 'express'
import serialize from 'serialize-javascript'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import configureStore  from '../src/store/configure-store'
import routes from '../src/routes'
import path from 'path'
const app = express()

app.use('/build', express.static(path.join(__dirname, '../build')))

const HTML = ({ content, store }) => (
  <html>
    <head>
    </head>
    <body>
      <div id='root' dangerouslySetInnerHTML={{ __html: content }}/>
      <script dangerouslySetInnerHTML={{ __html: `window.__INITIALSTATE__=${serialize(store.getState())};` }}/>
      <script src='/build/vendor.js' />
      <script src='/build/bundle.js' />
    </body>
  </html>
)

app.use(function (req, res) {

  const memoryHistory = createMemoryHistory(req.path)
  let store = configureStore(memoryHistory )
  const history = syncHistoryWithStore(memoryHistory, store)

  match({ history, routes , location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (renderProps) {

      store = configureStore(memoryHistory, store.getState())
      const content = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps}/>
        </Provider>
      )
      res.end('<!doctype html>\n' + renderToString(<HTML content={content} store={store}/>))
    }
  })

})


app.listen(8000, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('[SERVER UP] on http://127.0.0.1:3000')
})
