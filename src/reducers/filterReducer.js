import { fromJS } from 'immutable'
import { ADD_ITEM, REMOVE_ITEM, SET_VISIBILITY_FILTER } from '../actions'

function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {

    case SET_VISIBILITY_FILTER:
      return action.filter

    default:
      return state
  }
}

export default visibilityFilter
