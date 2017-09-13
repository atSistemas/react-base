import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

import { Record } from 'immutable';
import Display from './components/Display';
import ButtonPannel from './components/ButtonPannel';
import styles from './styles.css';

class Calculator extends Component {

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
