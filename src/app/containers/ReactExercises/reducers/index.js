import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { ReactExercisesCollection } from '../models';

function reactexercisesRequest ( state ) { return state; }

function reactexercisesError ( state ) { return state; }

function reactexercisesSuccess ( state, action ) {
  return state.update ( 'data', () => action.result );
}

const actionHandlers = {
  [ActionTypes.REACTEXERCISES_REQUEST]: reactexercisesRequest,
  [ActionTypes.REACTEXERCISES_SUCCESS]: reactexercisesSuccess,
  [ActionTypes.REACTEXERCISES_ERROR]: reactexercisesError
};

export default createReducer(actionHandlers, new ReactExercisesCollection());
