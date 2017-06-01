import { generateFetchTypes } from 'base';
import api from '../api';
import ActionTypes from '../actionTypes';

export function getImmutableExercises( { params } ) {
  return {
    types: generateFetchTypes(ActionTypes.IMMUTABLEEXERCISES_REQUEST),
    request: api.fetchImmutableExercises(params)
  };
}
