import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired
  }

  render() {
    const children = this.props.children;
    return (
      <div>
        <main>
          { children }
        </main>
      </div>
    );

  }
}

export default connect(null)(App);
