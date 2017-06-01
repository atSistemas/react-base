import React, { Component } from 'react';
import * as styles from './styles.css';

export class ReactExercises4 extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={ styles.ReactExercises }>
        <h3>COMUNICATING COMPONENTS</h3>
        <ul>
          <li>Crear dos componentes, uno padre e hijo, dond
            el hijo reciba un funcion del padre y este actualize
            el state del mismo.
          </li>
        </ul>
      </div>
    );
  }

}

export default ReactExercises4;
