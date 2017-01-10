import React, { Component, PropTypes } from 'react';
import { Record } from 'immutable';
import Display from './components/Display';
import ButtonPannel from './components/ButtonPannel';
import styles from './styles.css';

export class Calculator extends Component {

  static proptypes = {
    Calculator: PropTypes.instanceOf(Record).isRequired
  }

  render () {
    return (
      <div className={ styles.Calculator }>
        <div>
          <Display />
          <ButtonPannel />
        </div>
      </div>
    );
  }
}

export default Calculator;
