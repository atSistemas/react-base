import types from '../types'
import itemsAPI from '../api/items'

export function fetchItems( { category } ){
  console.log('[BASE] Requested url category url ' + category )
  return {
    types: [types.ITEMS_REQUEST, types.ITEMS_SUCESS, types.ITEMS_ERROR],
    promise: itemsAPI.getItems(category),
  }
}

export function fetchItem( id ){
  return {
    types: [types.ITEM_REQUEST, types.ITEM_SUCESS, types.ITEM_ERROR],
    promise: itemsAPI.getItem(id),
  }
}

export function changeItemState(id){
  return {
    type: [types.CHANGE_ITEM_STATE],
    id:id
  }
}
