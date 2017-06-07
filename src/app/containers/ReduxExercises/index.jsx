import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles.css';

export class ReduxExercises extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

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

export default connect(
  (state) => ({ counter: state.ReduxExercises})
)(ReduxExercises);
