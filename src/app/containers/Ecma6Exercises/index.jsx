import React, { Component } from 'react';
import * as styles from './styles.css';

export class Ecma6Exercises extends Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className={ styles.Ecma6Exercises }>
        <h3>ECMA6 EXERCISES</h3>
        <ul>
          <li>Crear un módulo que exporte 2 funciones arrow,
              una de suma exportada como default y que reciba
              como parametros un objeto con valores a destructurar:
              <div>
              number= 22
              number2= 10
              </div>
              La otra, debe retornar el doble del numero pasado (un solo paremetro).
          </li>
        </ul>
      </div>
    );
  }

}

export default Ecma6Exercises;
