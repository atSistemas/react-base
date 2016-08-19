import CreateReducer from 'base/shared/CreateReducer';
import Types from '../types';
import { MainModel } from '../models';

function logoRequest( state ) { return state; }

function logoError( state, error ) {
  console.log(error);
  return state;
}

function logoSuccess(state, action) {
  const data = action.result;
  return state
    .set('id', data.id)
    .set('alt', data.alt)
    .set('src', data.src)
    .set('name', data.name)
    .set('width', data.width);
}

const actionHandlers = {
  [Types.LOGO_REQUEST]: logoRequest,
  [Types.LOGO_SUCCESS]: logoSuccess,
  [Types.LOGO_ERROR]: logoError,
};

export default CreateReducer(actionHandlers, new MainModel());
