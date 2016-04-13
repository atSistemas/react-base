import { combineReducers } from 'redux'
import itemHandler from './item-handler'
import visibilityFilter from './visibility-filter'
export { itemHandler, visibilityFilter }

const reducers = combineReducers({
  itemHandler,
  visibilityFilter
})

export default reducers
