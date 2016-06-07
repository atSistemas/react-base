import Types from '../types';
import createReducer from 'shared/create-reducer';
import { LogoCollection } from '../models';

function logoRequest( state ){ return state; }

function logoError( state ){ return state; }

function logoSuccess(state, action) {
  return state.update( 'data', () => action.result );
}

const actionHandlers = {
  [Types.LOGO_REQUEST]: logoRequest,
  [Types.LOGO_SUCCESS]: logoSuccess,
  [Types.LOGO_ERROR]: logoError,
};

export default createReducer(actionHandlers, new LogoCollection());
