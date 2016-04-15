import * as Types from '../constants/action-types';
import createAction from '../shared/action-creator'

export const addItem = createAction(Types.ADD_ITEM, 'text')
export const removeItem = createAction(Types.REMOVE_ITEM, 'id')
