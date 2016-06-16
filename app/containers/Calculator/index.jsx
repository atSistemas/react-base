import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import Result from './components/Result';
import ButtonPannel from './components/ButtonPannel';
import styles from './styles.css';

const propTypes = {
};

export class Calculator extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    let data = this.props.Calculator;
    return (
      <div className={ styles.Calculator }>
        <Result result={ data }/>
        <ButtonPannel />
      </div>
    );
  }
}

Calculator.propTypes = propTypes;

export default connect(
  (state) => ({ Calculator: state.Calculator })
)(Calculator);
