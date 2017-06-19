import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles.css';

export class ReduxExercises extends Component {

  render () {
    return (
      <div className={ styles.ReduxExercises  }>
        <h3>REDUX EXERCISES</h3>
          Realizar con redux un contador con incremento
          y decremento de valores
      </div>
    );
  }
}

export default ReduxExercises;
