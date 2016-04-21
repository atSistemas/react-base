import { RECEIVE_ITEMS, CHANGE_REMOVED_STATE_ITEM} from '../constants'
import fetchData from '../shared/fetch-data'
import createAction from '../shared/action-creator'

const receiveItems = createAction(RECEIVE_ITEMS, 'data')

export function fetchItems(){
  let url = 'http://jsonplaceholder.typicode.com/posts'
  return fetchData(url, receiveItems)
}


export const changeRemovedStateItem = createAction(CHANGE_REMOVED_STATE_ITEM, 'id')