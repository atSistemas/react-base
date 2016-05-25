import { itemCollection, itemModel } from '../models/items';
import { generateImmutable } from '../shared/model-helper';

const initialState = window.$REACTBASE_STATE || {};

initialState.items = new itemCollection({
	data: generateImmutable( initialState.items.data, itemModel )
});

export default initialState;
