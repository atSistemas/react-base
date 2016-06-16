import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

const propTypes = {
  result : PropTypes.object.isRequired
};

export class Result extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    const result = this.props.Calculator.currentInput;
    return (
      <div className={ styles.Result }>=
        { result }
      </div>
    );
  }}


Result.propTypes = propTypes;

export default connect(
  (state) => ({ Calculator: state.Calculator })
)(Result);
