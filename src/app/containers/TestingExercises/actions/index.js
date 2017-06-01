import { generateFetchTypes } from 'base';
import api from '../api';
import ActionTypes from '../actionTypes';

export function getTestingExercises( { params } ) {
  return {
    types: generateFetchTypes(ActionTypes.TESTINGEXERCISES_REQUEST),
    request: api.fetchTestingExercises(params)
  };
}
