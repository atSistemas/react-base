import * as constants from '../constants'

function update(state = 'SHOW_ALL', action) {
  switch (action.type) {

    case constants.SHOW_ALL:
    return Object.assign({}, state )

    default:
      return state
  }
}

export default update
