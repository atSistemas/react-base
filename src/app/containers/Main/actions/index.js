import LogoAPI from '../api';
import ActionTypes from '../actionTypes';

export default {
  getLogo(url) {
    return {
      type: ActionTypes.LOGO_REQUEST,
      request: LogoAPI.fetchLogo(url)
    };
  }
};
