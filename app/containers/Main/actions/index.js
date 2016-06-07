import Types from '../types';
import LogoAPI from '../api';
import { generetaFetchTypes } from 'shared/TypeHelper';

export function getLogo( { params } ){
  return {
    types: generetaFetchTypes(Types.LOGO_REQUEST),
    request: LogoAPI.fetchLogo(params)
  };
}
