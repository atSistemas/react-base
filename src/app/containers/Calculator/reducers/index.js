import { createReducer } from 'base';
import { CalculatorModel } from '../models';
import ActionTypes from '../actionTypes';

const inputOperator = (state, action) => {
  const currentOperator = action.payload.operator;
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
};

const inputNumber = (state, action) => {
  const selectedValue = action.payload.value;
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
};

const inputDecimal = (state) => {
  const value = `${state.get('prevValue')}.`;
  return state
    .set('display', value)
    .set('newValue', false)
    .set('prevValue', value);
};

const inputOperation = (state, action) => {
  let value = 0;
  const operation = action.payload.value;
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
};

const calculate = (operator, prevValue, nextValue) => {
  const result = {
    [ActionTypes.SUM]: () => prevValue + nextValue,
    [ActionTypes.DIVIDE]: () => prevValue / nextValue,
    [ActionTypes.MULTIPLY]: () => prevValue * nextValue,
    [ActionTypes.SUBSTRACT]: () => prevValue - nextValue
  };
  return operator ? result[operator]() : prevValue;
};

const result = (state) => {
  const operator = state.get('operator');
  const prevValue = state.get('prevValue');
  const nextValue = state.get('nextValue');
  const result = calculate(operator, prevValue, nextValue);

  return state
    .set('newValue', false)
    .set('display', result)
    .set('prevValue', result)
    .set('resetDisplay', true);
};

const actionHandlers = {
  [ActionTypes.RESULT]: result,
  [ActionTypes.INPUT_NUMBER]: inputNumber,
  [ActionTypes.INPUT_DECIMAL]: inputDecimal,
  [ActionTypes.INPUT_OPERATOR]: inputOperator,
  [ActionTypes.INPUT_OPERATION]: inputOperation
};

export default createReducer(actionHandlers, new CalculatorModel());
