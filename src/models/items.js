import Immutable from 'immutable'

export const itemsList = Immutable.Map()

export const itemsModel = Immutable.Record({
	userId: null,
	id: "",
	title: 0,
	body: 0,
	removed: false
})
