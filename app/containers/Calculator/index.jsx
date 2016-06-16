import Immutable from 'immutable';
import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import ButtonPannel from './components/ButtonPannel';
import styles from './styles.css';

const propTypes = {
  Calculator: React.PropTypes.instanceOf(Immutable.Record)
};

export class Calculator extends Component {

  constructor (props) {
    super(props);
  }
  //className={ styles.Calculator }>
  render () {
    return (
      <div>
        <ButtonPannel />
      </div>
    );
  }

}

Calculator.propTypes = propTypes;

export default connect(
  (state) => ({ Calculator: state.Calculator })
)(Calculator);
