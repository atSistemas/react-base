import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import React, { Component, PropTypes } from 'react'
import { Router, RouterContext } from 'react-router'

export default function renderMainView(store, renderProps){
 return renderToString(
   <Provider store={ store }>
     <RouterContext { ...renderProps }/>
   </Provider>
 )
}
