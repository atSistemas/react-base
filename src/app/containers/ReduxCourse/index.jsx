import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import * as Actions from './actions';
import styles from './styles.css';

export class ReduxCourse extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.object.isRequired
  }

  render () {
    const { counter } = this.props.counter;
    return (
      <div className={ styles.ReduxCourse  }>
        counter: { counter }
        <div onClick={ () => this.props.dispatch(Actions.increment(2) ) }> increment </div>
        <div onClick={ () => this.props.dispatch(Actions.decrement(1) ) }> decrement </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({ counter: state.ReduxCourse})
)(ReduxCourse);
