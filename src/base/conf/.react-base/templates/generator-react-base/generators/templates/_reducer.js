import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { <%= name %>Model } from '../models';

const <%= nameLower %>Request = (state) => state;

const <%= nameLower %>Error = (state) => state;

const <%= nameLower %>Success = (state, action) => (
  state.update ('data', () => action.payload)
);

const actionHandlers = {
  [ActionTypes.<%= nameUpper %>_REQUEST]: <%= nameLower %>Request,
  [ActionTypes.<%= nameUpper %>_SUCCESS]: <%= nameLower %>Success,
  [ActionTypes.<%= nameUpper %>_ERROR]: <%= nameLower %>Error
};

export default createReducer(actionHandlers, new <%= name %>Model());
