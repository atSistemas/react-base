import api from '../api';
import ActionTypes from '../actionTypes';

export function get<%= namePascal %>( { params } ) {
  return {
    type: ActionTypes.<%= nameUpper %>_REQUEST,
    request: api.fetch<%= namePascal %>(params)
  };
}
