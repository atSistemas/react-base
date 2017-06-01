import { generateFetchTypes } from 'base';
import api from '../api';
import ActionTypes from '../actionTypes';

export function getReactExercises( { params } ) {
  return {
    types: generateFetchTypes(ActionTypes.REACTEXERCISES_REQUEST),
    request: api.fetchReactExercises(params)
  };
}
