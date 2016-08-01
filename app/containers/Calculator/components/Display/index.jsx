import { Record } from 'immutable';
import { connect } from 'react-redux';
import classNames from 'classNames/bind';
import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

const propTypes = {
  Calculator: PropTypes.instanceOf(Record)
};

export class Display extends Component {

  render () {
    const cx = classNames.bind(styles);
    const display = this.props.Calculator.display;

    const classDisplay = cx({
      Fade : this.props.Calculator.resetDisplay
    });

    return (
      <div className={ styles.Display }>
        <span className={ classDisplay }> { display } </span>
      </div>
    );
  }}

Display.propTypes = propTypes;

export default connect(
  (state) => ({ Calculator: state.Calculator })
)(Display);
