import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../Button';
import styles from './styles.css';
import * as Actions from '../../actions';

const propTypes = {
};

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
            <Button value="c" onClick={ this.actions.inputNumber } />
            <Button value="<" onClick={ this.actions.inputNumber } />
            <Button value="/" onClick={ () => this.actions.inputOperation('/') } />
            <Button value="x" onClick={ () => this.actions.inputOperation('x') } />
          </div>
          <div className={ styles.ButtonRow }>
            <Button value="7" onClick={ () => this.actions.inputNumber(7) } />
            <Button value="8" onClick={ () => this.actions.inputNumber(8) } />
            <Button value="9" onClick={ () => this.actions.inputNumber(9) } />
            <Button value="-" onClick={ () => this.actions.inputOperation('-') } />
          </div>
          <div className={ styles.ButtonRow }>
            <Button value="4" onClick={ () => this.actions.inputNumber(4) } />
            <Button value="5" onClick={ () => this.actions.inputNumber(5) } />
            <Button value="6" onClick={ () => this.actions.inputNumber(6) } />
            <Button value="+" onClick={ () => this.actions.inputOperation('+') } />
          </div>
          <div className={ styles.ButtonRow }>
            <Button value="1" onClick={ () => this.actions.inputNumber(1) } />
            <Button value="2" onClick={ () => this.actions.inputNumber(2) } />
            <Button value="3" onClick={ () => this.actions.inputNumber(3) } />
            <Button value="=" onClick={ this.actions.inputNumber } />
          </div>
        </div>

      </div>
    );
  }
}

ButtonPannel.propTypes = propTypes;

export default connect(null)(ButtonPannel);
