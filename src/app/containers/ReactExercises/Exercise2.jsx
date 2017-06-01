import React, { Component } from 'react';
import * as styles from './styles.css';

export class ReactExercises2 extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={ styles.ReactExercises }>
        <h3>COMPONENT WITH STATE</h3>
        <ul>
          <li>Crear un componente con un state por defecto con los valores
            id: 10,
            name: 'John'
            y que al clicar en un elemento actualize los valores del state
          </li>
        </ul>
      </div>
    );
  }

}

export default ReactExercises2;
