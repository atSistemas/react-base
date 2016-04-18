import { RECEIVE_ITEMS} from '../constants'
import fetchData from '../shared/fetch-data'
import createAction from '../shared/action-creator'

const receiveItems = createAction(RECEIVE_ITEMS, 'data')

function fetchItems(){
  let url = 'http://jsonplaceholder.typicode.com/posts'
  return fetchData(url, receiveItems)
}

export default fetchItems
