import ActionTypes from '../actionTypes';

export function inputNumber(value) {
  return {
    type: ActionTypes.INPUT_NUMBER,
    value
  };
}

export function inputOperation(value) {
  return {
    type: ActionTypes.INPUT_OPERATION,
    value
  };
}

export function inputDecimal() {
  return {
    type: ActionTypes.INPUT_DECIMAL
  };
}

export function inputOperator(operator) {
  return {
    type: ActionTypes.INPUT_OPERATOR,
    operator
  };
}


export function result(operator) {
  return {
    type: ActionTypes.RESULT,
    operator
  };
}
