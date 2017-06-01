import { generateFetchTypes } from 'base';
import api from '../api';
import ActionTypes from '../actionTypes';

export function getEcma6Exercises( { params } ) {
  return {
    types: generateFetchTypes(ActionTypes.ECMA6EXERCISES_REQUEST),
    request: api.fetchEcma6Exercises(params)
  };
}
