import { generateFetchTypes } from 'base';
import api from '../api';
import ActionTypes from '../actionTypes';

export function get<%= namePascal %>( { params } ) {
  return {
    types: generateFetchTypes(ActionTypes.<%= nameUpper %>_REQUEST),
    request: api.fetch<%= namePascal %>(params)
  };
}
