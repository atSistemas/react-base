import Types from '../types';
import CreateReducer from 'shared/CreateReducer';
import { CalculatorModel } from '../models';

function inputOperator(state, action){
  return state
  .set('operator', action.operator)
  .set('resetDisplay', true);
}

function calculate( state) {
  const operator = state.get('operator');
  const prevValue = state.get('prevValue');
  const nextValue = state.get('nextValue');

  switch(operator){
    case Types.SUM:
      return state.set('display', prevValue + nextValue);
    case Types.SUBSTRACT:
      return state.set('display', prevValue - nextValue);
    case Types.MULTIPLY:
      return state.set('display', prevValue * nextValue);
    case Types.DIVIDE:
      return state.set('display', prevValue / nextValue);
  }
}

function inputNumber( state, action) {
  const selectedValue = action.value;
  const resetDisplay = state.get('resetDisplay');

  if(resetDisplay){
    const currentValue = state.get('nextValue');
    const value = parseInt(currentValue + '' + selectedValue);
    return state
      .set('display', value)
      .set('nextValue', value);
  } else {
    let currentValue = state.get('prevValue');
    const value = parseInt(currentValue + '' + selectedValue);
    return state
      .set('display', value)
      .set('prevValue', value);
  }
}

function undo( state ) { return state; }

const actionHandlers = {
  [Types.UNDO]: undo,
  [Types.CALCULATE]: calculate,
  [Types.INPUT_NUMBER]: inputNumber,
  [Types.INPUT_OPERATOR]: inputOperator
};

export default CreateReducer(actionHandlers, new CalculatorModel());
