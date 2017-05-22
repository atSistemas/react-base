import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { Ecma6Collection } from '../models';

function ecma6Request ( state ) { return state; }

function ecma6Error ( state ) { return state; }

function ecma6Success ( state, action ) {
  return state.update ( 'data', () => action.result );
}

const actionHandlers = {
  [ActionTypes.ECMA6_REQUEST]: ecma6Request,
  [ActionTypes.ECMA6_SUCCESS]: ecma6Success,
  [ActionTypes.ECMA6_ERROR]: ecma6Error
};

export default createReducer(actionHandlers, new Ecma6Collection());
