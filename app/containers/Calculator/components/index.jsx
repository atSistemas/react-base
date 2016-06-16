import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';
import styles from './styles.css';

export class CalculatorComponent extends Component {

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);

  }

  render () {

    return (
      <div className="react-calculator">
        leches!!
        <ResultPanel exp={ exp }/>
        <ButtonPanel onClick={ this.onButtonClick }/>
      </div>
    );
  }

}
