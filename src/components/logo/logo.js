import React, { Component } from 'react';
import Actions from '../../actions';

class ReactBaseLogo extends Component {
  componentWillMount() {
    return false;
  }

  render() {
    return (
        <img src="./react-base-logo.png" alt="ReactBase" width="500" />
    );
  }

}

export default ReactBaseLogo
