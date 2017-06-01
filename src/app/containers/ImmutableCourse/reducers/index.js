import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { ImmutableCourseCollection } from '../models';

function immutablecourseRequest ( state ) { return state; }

function immutablecourseError ( state ) { return state; }

function immutablecourseSuccess ( state, action ) {
  return state.update ( 'data', () => action.result );
}

const actionHandlers = {
  [ActionTypes.IMMUTABLECOURSE_REQUEST]: immutablecourseRequest,
  [ActionTypes.IMMUTABLECOURSE_SUCCESS]: immutablecourseSuccess,
  [ActionTypes.IMMUTABLECOURSE_ERROR]: immutablecourseError
};

export default createReducer(actionHandlers, new ImmutableCourseCollection());
