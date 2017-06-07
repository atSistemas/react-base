import ActionTypes from '../actionTypes';

export function increment( num ) {
  return {
    type: ActionTypes.INCREMENT,
    payload: { num }
  };
}

export function decrement( num ) {
  return {
    type: ActionTypes.DECREMENT,
    payload: { num }
  };
}
