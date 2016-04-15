import { ADD_ITEM, REMOVE_ITEM, SET_VISIBILITY_FILTER } from '../actions'

function update(state = 'SHOW_ALL', action) {
  switch (action.type) {

    case SET_VISIBILITY_FILTER:
      return action.filter

    default:
      return state
  }
}

export default update
