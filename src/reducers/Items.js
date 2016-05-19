import types from '../types'
import createReducer from '../shared/create-reducer';
import Immutable from 'immutable'

function itemsRequest( state ){ return state }

function itemsError( state ){ return state }

function itemsSucess(state, action) {
  return Immutable.List(action.result);
}

function changeItemState(state, action){
  let items = state.map((item) => {
    if (item.id === action.id) {
      item.removed = !item.removed;
    }
    return item;
  });
  return items;
}

const handlers = {
  [types.ITEMS_REQUEST]: itemsRequest,
  [types.ITEMS_SUCESS]: itemsSucess,
  [types.ITEMS_ERROR]: itemsError,
  [types.CHANGE_ITEM_STATE]: changeItemState
}

export default createReducer(handlers, []);
