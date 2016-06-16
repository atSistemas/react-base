import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import Display from './components/Display';
import ButtonPannel from './components/ButtonPannel';
import styles from './styles.css';

const propTypes = {
};

export class Calculator extends Component {

  constructor (props) {
    super(props);
  }

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

export default connect(
  (state) => ({ Calculator: state.Calculator })
)(Calculator);
