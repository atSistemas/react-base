import { generateFetchTypes } from 'base';
import api from '../api';
import ActionTypes from '../actionTypes';

export function getImmutableCourse( { params } ) {
  return {
    types: generateFetchTypes(ActionTypes.IMMUTABLECOURSE_REQUEST),
    request: api.fetchImmutableCourse(params)
  };
}
