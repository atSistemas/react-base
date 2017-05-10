import { generateFetchTypes } from 'base';

import LogoAPI from '../api';
import ActionTypes from '../actionTypes';

export default {
  getLogo( { params } ) {
    return {
      types: generateFetchTypes(ActionTypes.LOGO_REQUEST),
      request: LogoAPI.fetchLogo(params)
    };
  }
};
