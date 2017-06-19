import React, { Component } from 'react';

import * as styles from './styles.css';

export class ReactExercises extends Component {

  render () {
    return (
      <div className={ styles.ReactExercises }>
        <h3>BASIC COMPONENT</h3>
        <ul>
          <li>Crear un hola mundo con un componente de React e importarlo aqui.
          </li>
        </ul>
      </div>
    );
  }

}

export default ReactExercises;
