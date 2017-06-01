import React, { Component } from 'react';
import * as styles from './styles.css';

export class ReactExercises5 extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={ styles.ReactExercises }>
        <h3>ITERATING COMPONENTS</h3>
        <ul>
          <li>Utilizar los componentes del ejecricio previo
            para crear una lista de elementos.
          </li>
        </ul>
      </div>
    );
  }

}

export default ReactExercises5;
