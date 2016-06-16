import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

export class Display extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    const display = this.props.Calculator.display;
    return (
      <div className={ styles.Display }>
        { display }
      </div>
    );
  }}


export default connect(
  (state) => ({ Calculator: state.Calculator })
)(Display);
