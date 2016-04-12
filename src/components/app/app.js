import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Routes from '../../routes'
import store from '../../stores/mainStore/mainStore'
import { Router, Route, browserHistory} from 'react-router'

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
