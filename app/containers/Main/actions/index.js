import Types from '../types';
import LogoAPI from '../api';
import { generateFetchTypes } from 'shared/TypeHelper';

export function getLogo( { params } ){
  return {
    types: generateFetchTypes(Types.LOGO_REQUEST),
    request: LogoAPI.fetchLogo(params)
  };
}
