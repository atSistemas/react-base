import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { <%= name %>Collection } from '../models';

function <%= nameLower %>Request ( state ) { return state; }

function <%= nameLower %>Error ( state ) { return state; }

function <%= nameLower %>Success ( state, action ) {
  return state.update ( 'data', () => action.result );
}

const actionHandlers = {
  [ActionTypes.<%= nameUpper %>_REQUEST]: <%= nameLower %>Request,
  [ActionTypes.<%= nameUpper %>_SUCCESS]: <%= nameLower %>Success,
  [ActionTypes.<%= nameUpper %>_ERROR]: <%= nameLower %>Error
};

export default createReducer(actionHandlers, new <%= name %>Collection());
