import ActionTypes from '../actionTypes';

export function increment( num ) {
  console.log(3333);
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
