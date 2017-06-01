import React, { Component } from 'react';
import MediasetLogo from 'app/components/LogoMediaset/';

import * as styles from './styles.css';

export class ReactExercises1 extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={ styles.ReactExercises }>
        <MediasetLogo />
        <h3>BASIC COMPONENT</h3>
        <ul>
          <li>Crear un hola mundo con un componente de React e importarlo aqui.
          </li>
        </ul>
      </div>
    );
  }

}

export default ReactExercises1;
