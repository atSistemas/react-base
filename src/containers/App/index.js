import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import Header from '../../components/Header';

export class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render(){
    let children = this.props.children;

    return (
      <div>
        <Header />
        <main>
          { children }
        </main>
      </div>
    );

  }
}

App.displayName = 'App';

export default connect(null)(App);
