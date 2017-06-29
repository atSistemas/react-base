import ActionTypes from '../actionTypes';
import api from '../api';

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

export function sum( num, num2 ) {
  return {
    type: ActionTypes.SUM,
    payload: { num, num2 }
  };
}

export function dataRequest( params ) {
  return {
    type: ActionTypes.DATA_REQUEST,
    payload: { params }
  };
}

export function fetchData() {
  return {
    types: [ActionTypes.DATA_REQUEST,ActionTypes.DATA_SUCCESS, ActionTypes.DATA_ERROR],
    request: api.fetchData()
  };
}
