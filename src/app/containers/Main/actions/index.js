import { generateFetchTypes } from 'base/shared/TypeHelper';
import Types from '../types';
import LogoAPI from '../api';

export default{
  getLogo( { params } ){
    return {
      types: generateFetchTypes(Types.LOGO_REQUEST),
      request: LogoAPI.fetchLogo(params)
    };
  }
};
