import ActionTypes from '../actionTypes';

export const inputNumber = value => ({
  type: ActionTypes.INPUT_NUMBER,
  payload: { value }
});

export const inputOperation = value => ({
  type: ActionTypes.INPUT_OPERATION,
  payload: { value }
});

export const inputDecimal = () => ({
  type: ActionTypes.INPUT_DECIMAL
});

export const inputOperator = operator => ({
  type: ActionTypes.INPUT_OPERATOR,
  payload: { operator }
});

export const result = operator => ({
  type: ActionTypes.RESULT,
  payload: { operator }
});
