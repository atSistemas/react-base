import types from '../types';
import logoAPI from '../api/logo';
import { generetaFetchTypes } from '../shared/type-helper';

export function fetchLogo( { params } ){
  return {
    types: generetaFetchTypes(types.LOGO_REQUEST),
    request: logoAPI.getLogo(params)
  };
}
