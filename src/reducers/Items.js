import { RECEIVE_ITEMS, CHANGE_ITEM_STATE } from '../constants'

const initialState = []

function items(state = initialState, action) {

	let items = []

	switch (action.type) {

		case RECEIVE_ITEMS:

		return { ...state, data: action.data }

		case CHANGE_ITEM_STATE:
			state.data.map(function (item, id) {
				if (item.id === action.id) {
			    item.removed = !item.removed
					}
					items.push(item)
				})

		return { ...state, data: items }

			default:
				return state
	  }
}

export default items
