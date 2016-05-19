import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import React, { Component, PropTypes } from 'react'
import { Router, RouterContext } from 'react-router'

const MainView = ({ store, renderProps }) => (
  <Provider store={ store }>
    <RouterContext { ...renderProps }/>
  </Provider>
)

MainView.propTypes= {
  store: PropTypes.object.isRequired,
  renderProps: PropTypes.object.isRequired
}

export default function renderMainView(store, renderProps){
 return renderToString(<MainView store={ store } renderProps={ renderProps } />)
}
