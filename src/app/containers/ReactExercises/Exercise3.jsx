import React, { Component } from 'react';
import * as styles from './styles.css';

export class ReactExercises3 extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={ styles.ReactExercises }>
        <h3>COMPONENT PROPTYPES</h3>
        <ul>
          <li>Crear un componente que reciba una prop llamada data y que sea un
            objeto con valores id y name. Dichos valores deben estar validados en
            los proptypes
          </li>
        </ul>
      </div>
    );
  }

}

export default ReactExercises3;
