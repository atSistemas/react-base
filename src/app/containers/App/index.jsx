import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

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
