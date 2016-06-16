import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Types from '../../types';
import Button from '../Button';
import styles from './styles.css';
import * as Actions from '../../actions';

export class ButtonPannel extends Component {

  constructor (props) {
    super(props);
    this.actions = bindActionCreators(Actions, props.dispatch);
  }

  render () {

    return (
      <div className={ styles.ButtonPanel }>
        <div className={ styles.Column1 }>
          <div className={ styles.ButtonRow }>
            <Button type="number" value="AC" onClick={ this.actions.inputNumber } />
            <Button type="number" value="+/-" onClick={ this.actions.inputNumber } />
            <Button type="number" value="%" onClick={ () => this.actions.inputOperation('%') } />
            <Button type="operate" value="÷" onClick={ () => this.actions.inputOperator(Types.DIVIDE) }  />

          </div>
          <div className={ styles.ButtonRow }>
            <Button type="number" value="7" onClick={ () => this.actions.inputNumber(7) } />
            <Button type="number" value="8" onClick={ () => this.actions.inputNumber(8) } />
            <Button type="number" value="9" onClick={ () => this.actions.inputNumber(9) } />
            <Button type="operate" value="x" onClick={ () => this.actions.inputOperator(Types.MULTIPLY) }  />
          </div>
          <div className={ styles.ButtonRow }>
            <Button type="number" value="4" onClick={ () => this.actions.inputNumber(4) } />
            <Button type="number" value="5" onClick={ () => this.actions.inputNumber(5) } />
            <Button type="number" value="6" onClick={ () => this.actions.inputNumber(6) } />
            <Button type="operate" value="-" onClick={ () => this.actions.inputOperator(Types.SUBSTRACT) }  />
          </div>
          <div className={ styles.ButtonRow }>
            <Button type="number" value="1" onClick={ () => this.actions.inputNumber(1) } />
            <Button type="number" value="2" onClick={ () => this.actions.inputNumber(2) } />
            <Button type="number" value="3" onClick={ () => this.actions.inputNumber(3) } />
            <Button type="operate" value="+" onClick={ () => this.actions.inputOperator(Types.SUM) }  />
          </div>
          <div className={ styles.ButtonRow }>
            <Button type="number" value="0" onClick={ () => this.actions.inputNumber(0) } />
            <Button type="number" value="←" onClick={ this.actions.inputNumber } />
            <Button type="number" value="," onClick={ () => this.actions.inputNumber(',') } />
            <Button type="operate"  value="=" onClick={ this.actions.calculate } />
          </div>
        </div>

      </div>
    );
  }
}

export default connect(null)(ButtonPannel);
