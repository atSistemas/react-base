import { RECEIVE_ITEMS, CHANGE_REMOVED_STATE_ITEM } from '../constants'

const initialState = []

function items(state = initialState, action) {

	let items = []

	switch (action.type) {

		case RECEIVE_ITEMS:
			action.data.map(function (item, id) {
				items.push(
			    {
		        id: item.id,
		        title: item.title,
		        removed : false
			    }
				)
			})

		return  Object.assign({}, state,  { list: items } )

		case CHANGE_REMOVED_STATE_ITEM:
			state.list.map(function (item, id) {
				if (item.id === action.id) {
			    item.removed = !item.removed
					} 
					items.push(item)          
				})

		return Object.assign({}, state, { list: items } )
		
			default:
				return state
	  }
}

export default items
