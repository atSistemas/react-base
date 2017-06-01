import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { Ecma6ExercisesCollection } from '../models';

function ecma6exercisesRequest ( state ) { return state; }

function ecma6exercisesError ( state ) { return state; }

function ecma6exercisesSuccess ( state, action ) {
  return state.update ( 'data', () => action.result );
}

const actionHandlers = {
  [ActionTypes.ECMA6EXERCISES_REQUEST]: ecma6exercisesRequest,
  [ActionTypes.ECMA6EXERCISES_SUCCESS]: ecma6exercisesSuccess,
  [ActionTypes.ECMA6EXERCISES_ERROR]: ecma6exercisesError
};

export default createReducer(actionHandlers, new Ecma6ExercisesCollection());
