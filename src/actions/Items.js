import * as constants from '../constants'
import { fetchData } from '../shared/fetch-data'
import createAction from '../shared/action-creator'
import itemsAPI from '../api/items'

export function fetchItems(){
  return {
    types: [constants.ITEMS_REQUEST, constants.ITEMS_SUCESS, constants.ITEMS_ERROR],
    promise: itemsAPI.getItems(),
  }
}

export function changeItemState(){
  return {
    type: CHANGE_ITEM_STATE,
    id:id
  }
}
