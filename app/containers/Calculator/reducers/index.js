import Types from '../types';
import CreateReducer from 'shared/CreateReducer';
import { CalculatorModel } from '../models';

function inputOperator(state, action){
  return state
    .set('newValue', true)
    .set('resetDisplay', true)
    .set('operator', action.operator);
}

function inputDecimal( state ){
  const value = `${state.get('prevValue')}.`;
  return state
    .set('display', value)
    .set('newValue', false)
    .set('prevValue', value);
}

function inputOperation( state, action ) {
  let value = 0;
  const operation = action.value;
  const prevValue = state.get('prevValue');

  switch(operation){
    case '%':
      value = prevValue / 100;
      return state
        .set('display', value)
        .set('prevValue', value);

    case 'C':
      value = 0;
      return state
        .set('display', value)
        .set('prevValue', value)
        .set('nextValue', value)
        .set('resetDisplay', true);

    case '+/-':
      value = (Math.sign(prevValue) === 1) ? -Math.abs(prevValue) : Math.abs(prevValue);
      return state
        .set('display', value)
        .set('prevValue', value);
  }
}

function inputNumber( state, action) {
  const selectedValue = action.value;
  const newValue = state.get('newValue');

  if(newValue){
    const prevValue = state.get('nextValue');
    const value = parseFloat(`${prevValue}${selectedValue}`);
    return state
      .set('display', value)
      .set('nextValue', value)
      .set('resetDisplay', false);
  } else {
    const prevValue = state.get('prevValue');
    const value = parseFloat(`${prevValue}${selectedValue}`);
    return state
      .set('display', value)
      .set('prevValue', value)
      .set('resetDisplay', false);
  }
}

function calculate( state) {
  let result = 0;
  const operator = state.get('operator');
  const prevValue = state.get('prevValue');
  const nextValue = state.get('nextValue');

  switch(operator){
    case Types.SUM:
      result = prevValue + nextValue;
      return state
        .set('nextValue', 0)
        .set('newValue', true)
        .set('display', result)
        .set('prevValue', result)
        .set('resetDisplay', true);

    case Types.SUBSTRACT:
      result = prevValue - nextValue;
      return state
        .set('nextValue', 0)
        .set('newValue', true)
        .set('display', result)
        .set('prevValue', result)
        .set('resetDisplay', true);

    case Types.MULTIPLY:
      result = prevValue * nextValue;
      return state
        .set('nextValue', 0)
        .set('newValue', true)
        .set('display', result)
        .set('prevValue', result)
        .set('resetDisplay', true);

    case Types.DIVIDE:
      result = prevValue / nextValue;
      return state
        .set('nextValue', 0)
        .set('newValue', true)
        .set('display', result)
        .set('prevValue', result)
        .set('resetDisplay', true);
  }
}

const actionHandlers = {
  [Types.CALCULATE]: calculate,
  [Types.INPUT_NUMBER]: inputNumber,
  [Types.INPUT_DECIMAL]: inputDecimal,
  [Types.INPUT_OPERATOR]: inputOperator,
  [Types.INPUT_OPERATION]: inputOperation
};

export default CreateReducer(actionHandlers, new CalculatorModel());
