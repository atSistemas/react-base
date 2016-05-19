import types from '../types'
import Immutable from 'immutable'
import createReducer from '../shared/create-reducer';

function itemsRequest( state ){ return state }

function itemsError( state ){ return state }

function itemsSuccess(state, action) {
  return Immutable.fromJS(action.result);
}

function changeItemState(state, action){
  return state.map((item) => {
    if (item.get('id') === action.id) {
      return item.set('removed', !item.get('removed'));
    }
    return item;
  });
}

const handlers = {
  [types.ITEMS_REQUEST]: itemsRequest,
  [types.ITEMS_SUCCESS]: itemsSuccess,
  [types.ITEMS_ERROR]: itemsError,
  [types.CHANGE_ITEM_STATE]: changeItemState
}

export default createReducer(handlers, []);
