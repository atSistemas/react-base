import { createReducer } from 'base';
import { CalculatorModel } from '../models';
import ActionTypes from '../actionTypes';

const actionHandlers = {
  [ActionTypes.RESULT]: result,
  [ActionTypes.INPUT_NUMBER]: inputNumber,
  [ActionTypes.INPUT_DECIMAL]: inputDecimal,
  [ActionTypes.INPUT_OPERATOR]: inputOperator,
  [ActionTypes.INPUT_OPERATION]: inputOperation
};

function inputOperator(state, action) {
  const currentOperator = action.operator;
  const prevOperator = state.get('operator');
  const prevValue = state.get('prevValue');
  const nextValue = state.get('nextValue');
  const newValue = state.get('newValue');

  const result = (newValue) ?
  calculate(prevOperator, prevValue, nextValue) : prevValue;

  return state
    .set('nextValue', 0)
    .set('newValue', true)
    .set('display', result)
    .set('prevValue', result)
    .set('resetDisplay', true)
    .set('operator', currentOperator);
}

function inputNumber( state, action) {
  const selectedValue = action.value;
  const newValue = state.get('newValue');
  const prevValue = (newValue) ? state.get('nextValue') : state.get('prevValue');
  const value = parseFloat(`${prevValue}${selectedValue}`);

  if (newValue) {
    return state
      .set('display', value)
      .set('nextValue', value)
      .set('resetDisplay', false);
  } else {
    return state
      .set('display', value)
      .set('prevValue', value)
      .set('resetDisplay', false);
  }
}

function inputDecimal( state ) {
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

  switch (operation) {
    case ActionTypes.PERCENT:
      value = prevValue / 100;
      return state
        .set('display', value)
        .set('prevValue', value);

    case ActionTypes.CLEAN:
      value = 0;
      return state
        .set('display', value)
        .set('prevValue', value)
        .set('nextValue', value)
        .set('resetDisplay', true);

    case ActionTypes.CHANGE_SIGN:
      value = (Math.sign(prevValue) === 1) ?
      -Math.abs(prevValue) : Math.abs(prevValue);
      return state
        .set('display', value)
        .set('prevValue', value);
  }
}

function calculate( operator, prevValue, nextValue) {
  const result = {
    [ActionTypes.SUM]: () => prevValue + nextValue,
    [ActionTypes.DIVIDE]: () => prevValue / nextValue,
    [ActionTypes.MULTIPLY]: () => prevValue * nextValue,
    [ActionTypes.SUBSTRACT]: () => prevValue - nextValue
  };
  return operator ? result[operator]() : prevValue;
}

function result(state) {
  const operator = state.get('operator');
  const prevValue = state.get('prevValue');
  const nextValue = state.get('nextValue');
  const result = calculate(operator, prevValue, nextValue);

  return state
    .set('newValue', false)
    .set('display', result)
    .set('prevValue', result)
    .set('resetDisplay', true);
}

export default createReducer(actionHandlers, new CalculatorModel());
