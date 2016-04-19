import { SET_VISIBILITY_FILTER } from '../constants'

function update(state = 'SHOW_ALL', action) {
  console.log(222222, action)
  switch (action.type) {

    case SET_VISIBILITY_FILTER:
    console.log(333333)
    return action.filter

    default:
      return state
  }
}

export default update
