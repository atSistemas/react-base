import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { TestingExercisesCollection } from '../models';

function testingexercisesRequest ( state ) { return state; }

function testingexercisesError ( state ) { return state; }

function testingexercisesSuccess ( state, action ) {
  return state.update ( 'data', () => action.result );
}

const actionHandlers = {
  [ActionTypes.TESTINGEXERCISES_REQUEST]: testingexercisesRequest,
  [ActionTypes.TESTINGEXERCISES_SUCCESS]: testingexercisesSuccess,
  [ActionTypes.TESTINGEXERCISES_ERROR]: testingexercisesError
};

export default createReducer(actionHandlers, new TestingExercisesCollection());
