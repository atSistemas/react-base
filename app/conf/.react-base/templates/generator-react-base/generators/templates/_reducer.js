import Types from '../types';
import CreateReducer from 'shared/CreateReducer';
import { <%= namePascal %>Collection } from '../models';

function <%= nameLower %>Request ( state ) { return state; }

function <%= nameLower %>Error ( state ) { return state; }

function <%= nameLower %>Success ( state, action ) {
  return state.update ( 'data', () => action.result );
}

const actionHandlers = {
  [Types.<%= nameUpper %>_REQUEST]: <%= nameLower %>Request,
  [Types.<%= nameUpper %>_SUCCESS]: <%= nameLower %>Success,
  [Types.<%= nameUpper %>_ERROR]: <%= nameLower %>Error
};

export default CreateReducer(actionHandlers, new <%= namePascal %>Collection());
