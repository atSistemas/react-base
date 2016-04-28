import * as constants from '../constants'
import itemsAPI from '../api/items'

export function fetchItems(){
  return {
    types: [constants.ITEMS_REQUEST, constants.ITEMS_SUCESS, constants.ITEMS_ERROR],
    promise: itemsAPI.getItems(),
  }
}

export function changeItemState(id){
  return {
    type: [constants.CHANGE_ITEM_STATE],
    id:id
  }
}
