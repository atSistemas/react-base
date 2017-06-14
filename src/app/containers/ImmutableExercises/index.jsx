import React, { Component } from 'react';

import styles from './styles.css';

export class ImmutableExercises extends Component {

  render () {
    return (
      <div className={ styles.ImmutableExercises  }>
        <h3>IMMUTABLE EXERCISES</h3>
          Crear un record con diversas propiedades (string, integer, boolean)
          y que tenga un map dentro y un list.
      </div>
    );
  }
}

export default ImmutableExercises;
