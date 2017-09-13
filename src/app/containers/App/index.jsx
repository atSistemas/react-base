import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

class App extends Component {

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

export default App;
