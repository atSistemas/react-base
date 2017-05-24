import React, { Component } from 'react';
import MediasetLogo from 'app/components/LogoMediaset/';

import MyFirstReactComponent from './components/MyFirstReactComponent';
import ComponentWithState from './components/ComponentWithState';
import ComponentPropTypes from './components/ComponentPropTypes';
import ComunicatingComponents from './components/ComunicatingComponents';

import styles from './styles.css';

class ReactCourse extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const obj = {id: 22};
    return (
      <div className={ styles.ReactCourse } >
        <MediasetLogo />
        <h3>Basic Component</h3>
        <MyFirstReactComponent />
        <h3>Component With State</h3>
        <ComponentWithState />
        <h3>Component PropTypes</h3>
        <ComponentPropTypes myProp="hola" myObj={ obj } />
        <h3>Comunicating components</h3>
        <ComunicatingComponents />
      </div>
    );
  }
}

export default ReactCourse;
