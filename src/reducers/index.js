import {combineReducers} from 'redux-immutable'

import items from './Items'
import filter from './Filters'

export default combineReducers({
  items,
  //filter
})
