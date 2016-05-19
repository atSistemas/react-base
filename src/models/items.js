import Immutable from 'immutable'

export const itemsList = Immutable.Map({
	items: Immutable.List(),
})

export const itemsModel = Immutable.Record({
	userId: null,
	id: "",
	title: 0,
	body: 0,
})
