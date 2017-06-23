import { createReducer } from 'base';
import { MainModel } from '../models';
import ActionTypes from '../actionTypes';

function logoRequest( state ) { return state; }

function logoError( state, error ) {
  console.log(error);
  return state;
}

function logoSuccess(state, action) {
  const data = action.payload;
  return state
    .set('id', data.id)
    .set('alt', data.alt)
    .set('src', data.src)
    .set('name', data.name)
    .set('width', data.width);
}

const actionHandlers = {
  [ActionTypes.LOGO_REQUEST]: logoRequest,
  [ActionTypes.LOGO_SUCCESS]: logoSuccess,
  [ActionTypes.LOGO_ERROR]: logoError,
};

export default createReducer(actionHandlers, new MainModel());
