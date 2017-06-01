import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { ImmutableExercisesCollection } from '../models';

function immutableexercisesRequest ( state ) { return state; }

function immutableexercisesError ( state ) { return state; }

function immutableexercisesSuccess ( state, action ) {
  return state.update ( 'data', () => action.result );
}

const actionHandlers = {
  [ActionTypes.IMMUTABLEEXERCISES_REQUEST]: immutableexercisesRequest,
  [ActionTypes.IMMUTABLEEXERCISES_SUCCESS]: immutableexercisesSuccess,
  [ActionTypes.IMMUTABLEEXERCISES_ERROR]: immutableexercisesError
};

export default createReducer(actionHandlers, new ImmutableExercisesCollection());
