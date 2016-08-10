import Types from '../types';
import api from '../api';
import { generateFetchTypes } from 'base/shared/TypeHelper';

export function get<%= namePascal %>( { params } ){
  return {
    types: generateFetchTypes(Types.<%= nameUpper %>_REQUEST),
    request: api.fetch<%= namePascal %>(params)
  };
}
