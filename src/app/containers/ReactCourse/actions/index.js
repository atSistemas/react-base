import { generateFetchTypes } from 'base';
import api from '../api';
import ActionTypes from '../actionTypes';

export function getReactCourse( { params } ) {
  return {
    types: generateFetchTypes(ActionTypes.REACTCOURSE_REQUEST),
    request: api.fetchReactCourse(params)
  };
}
