import * as constants from '../constants'
import { fetchData } from '../shared/fetch-data'
import createAction from '../shared/action-creator'

export function fetchItems(){
  return {
    types: [constants.ITEMS_REQUEST, constants.ITEMS_SUCESS, constants.ITEMS_ERROR],
    promise: data(),
    data
  }
}

export function changeItemState(){
  return {
    type: CHANGE_ITEM_STATE,
    id:id
  }
}

export function data(){
  let url = 'http://jsonplaceholder.typicode.com/posts'
   return fetch(url)
   .then(req => req.json())
   .then(data => data)
}
