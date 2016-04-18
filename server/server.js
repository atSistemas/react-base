import qs from 'qs'
import { renderToString } from 'react-dom/server'
import path from 'path'
import Express from 'express'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterApp from '../src/reducers'
import App from '../src/containers/App'

const app = Express()
const port = 8000

app.use(handleRender)

function handleRender(req, res) {
  const params = qs.parse(req.query)
  const counter = parseInt(params.counter, 10) || 0
  let initialState = { counter }

  const store = createStore(counterApp, initialState)

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const finalState = store.getState()

  res.send(renderFullPage(html, finalState))
}


function renderFullPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(port)
