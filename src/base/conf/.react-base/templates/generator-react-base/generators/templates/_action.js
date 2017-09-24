import api from '../api';
import ActionTypes from '../actionTypes';

export const get<%= namePascal %> = ({ params }) => ({
  type: ActionTypes.<%= nameUpper %>_REQUEST,
  request: api.fetch<%= namePascal %>(params)
});