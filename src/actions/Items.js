import * as constants from '../constants'
import itemsAPI from '../api/items'

export function fetchItems( { category } ){
  console.log('[BASE] Requested url category url ' + category )
  return {
    types: [constants.ITEMS_REQUEST, constants.ITEMS_SUCESS, constants.ITEMS_ERROR],
    promise: itemsAPI.getItems(category),
  }
}

export function fetchItem( id ){
  return {
    types: [constants.ITEM_REQUEST, constants.ITEM_SUCESS, constants.ITEM_ERROR],
    promise: itemsAPI.getItem(id),
  }
}

export function changeItemState(id){
  return {
    type: [constants.CHANGE_ITEM_STATE],
    id:id
  }
}
