import { connect } from 'react-redux';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';

import * as Actions from './actions';
import styles from './styles.css';

export class ReduxCourse extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    sum: PropTypes.number.isRequired
  }

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  componentDidMount(){
    this.actions.fetchData();
  }

  render () {
    const { counter, sum } = this.props;

    return (
      <div className={ styles.ReduxCourse  }>
        counter:
        <div id="counterValue">
        { counter }
        </div>
        sum: { sum }
        <div id="sum" onClick={ () => this.actions.sum(5,5) }> sum </div>
        <div id="increment" onClick={ () => this.actions.increment(2) }> increment </div>
        <div id="decrement" onClick={ () => this.actions.decrement(1) }> decrement </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    counter: state.ReduxCourse.counter,
    sum: state.ReduxCourse.sum
  }),
)(ReduxCourse);
