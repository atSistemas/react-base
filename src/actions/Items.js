import { RECEIVE_ITEMS, CHANGE_ITEM_STATE } from '../constants'
import fetchData from '../shared/fetch-data'
import createAction from '../shared/action-creator'

const receiveItems = createAction(RECEIVE_ITEMS, 'data')

export const changeItemState = createAction(CHANGE_ITEM_STATE, 'id')

export function fetchItems(){
  let url = 'http://jsonplaceholder.typicode.com/posts'
  return fetchData(url, receiveItems)
}
