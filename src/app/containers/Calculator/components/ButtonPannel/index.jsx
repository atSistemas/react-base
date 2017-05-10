import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import Button from '../Button';
import styles from './styles.css';
import * as Actions from '../../actions';
import ActionTypes from '../../actionTypes';

export class ButtonPannel extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  render () {
    return (
      <div className={ styles.ButtonPanel }>
        <div className={ styles.Column }>
          <div className={ styles.Row }>
            <Button type="number" value="C" onClick={ () => this.actions.inputOperation(ActionTypes.CLEAN) } />
            <Button type="number" value="+/-" onClick={ () => this.actions.inputOperation(ActionTypes.CHANGE_SIGN) } />
            <Button type="number" value="%" onClick={ () => this.actions.inputOperation(ActionTypes.PERCENT) } />
            <Button type="operator" value="÷" onClick={ () => this.actions.inputOperator(ActionTypes.DIVIDE) }  />

          </div>
          <div className={ styles.Row }>
            <Button type="number" value="7" onClick={ () => this.actions.inputNumber(7) } />
            <Button type="number" value="8" onClick={ () => this.actions.inputNumber(8) } />
            <Button type="number" value="9" onClick={ () => this.actions.inputNumber(9) } />
            <Button type="operator" value="x" onClick={ () => this.actions.inputOperator(ActionTypes.MULTIPLY) }  />
          </div>
          <div className={ styles.Row }>
            <Button type="number" value="4" onClick={ () => this.actions.inputNumber(4) } />
            <Button type="number" value="5" onClick={ () => this.actions.inputNumber(5) } />
            <Button type="number" value="6" onClick={ () => this.actions.inputNumber(6) } />
            <Button type="operator" value="-" onClick={ () => this.actions.inputOperator(ActionTypes.SUBSTRACT) }  />
          </div>
          <div className={ styles.Row }>
            <Button type="number" value="1" onClick={ () => this.actions.inputNumber(1) } />
            <Button type="number" value="2" onClick={ () => this.actions.inputNumber(2) } />
            <Button type="number" value="3" onClick={ () => this.actions.inputNumber(3) } />
            <Button type="operator" value="+" onClick={ () => this.actions.inputOperator(ActionTypes.SUM) }  />
          </div>
          <div className={ styles.Row }>
            <Button type="zero" value="0" onClick={ () => this.actions.inputNumber(0) } />
            <Button type="number" value="." onClick={ () => this.actions.inputDecimal() } />
            <Button type="operator"  value="=" onClick={ () => this.actions.result() } />
          </div>
        </div>

      </div>
    );
  }
}

export default connect(null)(ButtonPannel);
