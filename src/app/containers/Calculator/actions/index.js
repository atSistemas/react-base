import ActionTypes from '../actionTypes';

export function inputNumber(value) {
  return {
    type: ActionTypes.INPUT_NUMBER,
    payload: { value }
  };
}

export function inputOperation(value) {
  return {
    type: ActionTypes.INPUT_OPERATION,
    payload: { value }
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
    payload: { operator }
  };
}


export function result(operator) {
  return {
    type: ActionTypes.RESULT,
    payload: { operator }
  };
}
