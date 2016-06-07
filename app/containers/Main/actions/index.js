import Types from '../types';
import LogoAPI from '../api';
import { generetaFetchTypes } from 'shared/type-helper';

export function getLogo( { params } ){
  return {
    types: generetaFetchTypes(Types.LOGO_REQUEST),
    request: LogoAPI.fetchLogo(params)
  };
}
