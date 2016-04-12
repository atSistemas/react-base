import React, { Component } from 'react'
import Routes from '../../routes'
import Logo from '../logo'
import Home from '../../pages/home'
import { syncHistoryWithStore } from 'react-router-redux'
import store from '../../stores/mainStore/mainStore'
import { Router, Route, browserHistory} from 'react-router'

class App extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        {Routes}
      </Router>
    );
  }

}

export default App
