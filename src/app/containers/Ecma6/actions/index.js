import { generateFetchTypes } from 'base';
import api from '../api';
import ActionTypes from '../actionTypes';

export function getEcma6( { params } ) {
  return {
    types: generateFetchTypes(ActionTypes.ECMA6_REQUEST),
    request: api.fetchEcma6(params)
  };
}
