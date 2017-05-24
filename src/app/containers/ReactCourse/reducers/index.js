import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { ReactCourseCollection } from '../models';

function reactcourseRequest ( state ) { return state; }

function reactcourseError ( state ) { return state; }

function reactcourseSuccess ( state, action ) {
  return state.update ( 'data', () => action.result );
}

const actionHandlers = {
  [ActionTypes.REACTCOURSE_REQUEST]: reactcourseRequest,
  [ActionTypes.REACTCOURSE_SUCCESS]: reactcourseSuccess,
  [ActionTypes.REACTCOURSE_ERROR]: reactcourseError
};

export default createReducer(actionHandlers, new ReactCourseCollection());
