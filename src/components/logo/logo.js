import React, { Component } from 'react';
import ReactBaseActions from '../../actions';

class ReactBaseLogo extends Component {
  componentWillMount() {
    return false;
  }

  render() {
    return (
        <img onClick={ReactBaseActions.addItem.bind(null,'hola')} src="./react-base-logo.png" alt="ReactBase" width="300" />
    );
  }

}

export default ReactBaseLogo
