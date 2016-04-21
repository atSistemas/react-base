import { RECEIVE_ITEMS, CHANGE_REMOVED_STATE_ITEM } from '../constants'

const initialState = []

function items(state = initialState, action) {

	switch (action.type) {

		case RECEIVE_ITEMS:
			let items = []

			action.data.map(function (item, id) {
				items.push(
					{
						id: item.id,
						title: item.title,
						removed : false
					}
				)
			})
			return items 

    case CHANGE_REMOVED_STATE_ITEM:
      return state.map(function (item, id) {
      	  if (item.id === action.id) {
      	  	item.removed = !item.removed
      	  } 
      	  return item      	
      })

		default:
			return state
  }
}

export default items
