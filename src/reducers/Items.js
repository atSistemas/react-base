import types from '../types'
import createReducer from '../shared/create-reducer'
import { itemCollection, itemModel } from '../models/items'

function itemsRequest( state ){ return state }

function itemsError( state ){ return state }

function itemsSuccess(state, action) {
  return state.update( 'data', map => action.result )
}

function changeItemState(state, action){
 return state.update( 'items', list => {
   return list.map(item => {
      if(item.get('id') === action.id) return item.set('removed', !item.get('removed'))
      return item
   })
 })
}

const handlers = {
  [types.ITEMS_REQUEST]: itemsRequest,
  [types.ITEMS_SUCCESS]: itemsSuccess,
  [types.ITEMS_ERROR]: itemsError,
  [types.CHANGE_ITEM_STATE]: changeItemState
}

export default createReducer(handlers, new itemCollection())
