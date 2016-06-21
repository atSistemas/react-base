import { connect } from 'react-redux';
import { Record } from 'immutable';
import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

const propTypes = {
  Calculator: PropTypes.instanceOf(Record)
};

export class Display extends Component {

  render () {
    const display = this.props.Calculator.display;
    return (
      <div className={ styles.Display }>
        { display }
      </div>
    );
  }}

Display.propTypes = propTypes;

export default connect(
  (state) => ({ Calculator: state.Calculator })
)(Display);
