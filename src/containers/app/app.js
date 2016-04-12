import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import Routes from '../../routes'
import configureStore from '../../store/configure-store'
import { Router, Route, browserHistory } from '../../shared/route-helper'

const store = configureStore({})

class App extends Component {

  render() {
    return (
      <Provider store={ store }>
        <Router history={ browserHistory }>
          {Routes}
        </Router>
      </Provider>
    );
  }

}

export default App
