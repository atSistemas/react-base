import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';

import * as Actions from '../../actions';
import Button from '../Button';
import styles from './styles.css';

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
            <Button value="/" onClick={ this.actions.inputNumber } />
            <Button value="x" onClick={ this.actions.inputNumber } />
          </div>
          <div className={ styles.ButtonRow }>
            <Button value="7" onClick={ this.actions.inputNumber } />
            <Button value="8" onClick={ this.actions.inputNumber } />
            <Button value="9" onClick={ this.actions.inputNumber } />
            <Button value="-" onClick={ this.actions.inputNumber } />
          </div>
          <div className={ styles.ButtonRow }>
            <Button value="4" onClick={ this.actions.inputNumber } />
            <Button value="5" onClick={ this.actions.inputNumber } />
            <Button value="6" onClick={ this.actions.inputNumber } />
            <Button value="+" onClick={ this.actions.inputNumber } />
          </div>
          <div className={ styles.ButtonRow }>
            <Button value="1" onClick={ this.actions.inputNumber } />
            <Button value="2" onClick={ this.actions.inputNumber } />
            <Button value="3" onClick={ this.actions.inputNumber } />
            <Button value="=" onClick={ this.actions.inputNumber } />
          </div>
        </div>

      </div>
    );
  }
}

ButtonPannel.propTypes = propTypes;

export default ButtonPannel;
