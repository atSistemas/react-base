import types from '../types';
import createReducer from '../shared/create-reducer';
import { logoCollection  } from '../models/logo';

function logoRequest( state ){ return state; }

function logoError( state ){ return state; }

function logoSuccess(state, action) {
  return state.update( 'data', () => action.result );
}

const actionHandlers = {
  [types.LOGO_REQUEST]: logoRequest,
  [types.LOGO_SUCCESS]: logoSuccess,
  [types.LOGO_ERROR]: logoError,
};

export default createReducer(actionHandlers, new logoCollection());
