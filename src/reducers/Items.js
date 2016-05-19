import types from '../types'
import Immutable from 'immutable'
import createReducer from '../shared/create-reducer';
import { itemModel, itemsList } from '../models/items'

function itemsRequest( state ){ return state }

function itemsError( state ){ return state }

function itemsSuccess(state, action) {
  //return state.update( 'items', list => action.result )
  return state.update( 'items', map => action.result )

}

function changeItemState(state, action){
  const items = state.get('items')
  return items.map((item) => {
    if (item.id === action.id) {
      return item.removed, !item.removed
    }
    return item
  })
}

const handlers = {
  [types.ITEMS_REQUEST]: itemsRequest,
  [types.ITEMS_SUCCESS]: itemsSuccess,
  [types.ITEMS_ERROR]: itemsError,
  [types.CHANGE_ITEM_STATE]: changeItemState
}

export default createReducer(handlers, itemsList);
