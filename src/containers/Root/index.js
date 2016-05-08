import { Provider } from 'react-redux'
import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'

import routes from '../../routes'
import configureStore from '../../store/configure-store'

let state = window.$REACTBASE_STATE
const store = configureStore(state)

class Root extends Component {

  render() {
    return (
      <Provider store={ store }>
        <Router history={ browserHistory } routes={ routes } />
      </Provider>
    )
  }
}


export default Root
