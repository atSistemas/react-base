import React, { Component, PropTypes } from 'react';
import { Record } from 'immutable';
import Display from './components/Display';
import ButtonPannel from './components/ButtonPannel';
import styles from './styles.css';

const propTypes = {
  Calculator: PropTypes.instanceOf(Record)
};

export class Calculator extends Component {

  render () {
    return (
      <div className={ styles.Calculator }>
        <Display />
        <ButtonPannel />
      </div>
    );
  }
}

Calculator.propTypes = propTypes;

export default Calculator;
