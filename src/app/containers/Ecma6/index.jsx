/*
01 ECMA6 MODULES
02 ECMA6 ARROW FUNCTIONS
*/

import { connect } from 'react-redux';
import React, { Component } from 'react';
import MediasetLogo from 'app/components/LogoMediaset/';
//import custom default value
import defaultValue from './modules/defaultValue';
//import custom default function
import defaultFunction from './modules/defaultFunction';
//import several values and funcions of a module
import { valOne, sayHi } from './modules/severalValues';
// Shortcuts and mix
//import { valOne, sayHi, hi, bye } from './modules/shortcutsAndMix';
import { isEven } from './modules/arrow';
import { regularFunction, arrowFunction } from './modules/arrowThis';
import * as Styles from './styles.css';

export class Ecma6 extends Component {

  constructor (props) {
    super(props);
  }

  render () {

    return (
      
      <div className={ Styles.Ecma6 }>
        <MediasetLogo />
        <h3>ECMA6 MODULES</h3>
        <ul>
          <li>
            <b>defaultValue</b>: { defaultValue }
          </li>
          <li>
            <b>defaultFunction</b>: { defaultFunction(2) }
          </li>
          <li>
            <b>valOne</b>: { valOne }
          </li>
          <li>
            <b>sayHi</b>: { sayHi('Peter') }
          </li>
        </ul>
        <h3>ECMA6 ARROW FUNCTION</h3>
        <ul>
          <li>
            <b>isEven</b>: { isEven(5,2) } ;
          </li>
          <li>  
            <b>regularFunction </b>: { regularFunction(22) }
          </li>
           <li>  
            <b>arrowFunction </b>: { arrowFunction(22) }
          </li>
        </ul>
          <h3>ECMA6 DESTRUCTURATION </h3>
        <ul>
          <li>
            <b>isEven</b>: { isEven(5,2) } ;
          </li>
          <li>  
            <b>regularFunction </b>: { regularFunction(22) }
          </li>
           <li>  
            <b>arrowFunction </b>: { arrowFunction(22) }
          </li>
        </ul>
      </div>
    );
  }

}

export default connect(null)(Ecma6);

