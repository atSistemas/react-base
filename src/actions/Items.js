import types from '../types';
import itemsAPI from '../api/items';
import { generetaFetchTypes } from '../shared/type-helper';

export function fetchItems( { category } ){
  return {
    types: generetaFetchTypes(types.ITEMS_REQUEST),
    request: itemsAPI.getItems(category)
  };
}

export function fetchItem( id ){
  return {
    types: generetaFetchTypes(types.ITEM_REQUEST),
    request: itemsAPI.getItem(id)
  };
}

export function changeItemState(id){
  return {
    type: [types.CHANGE_ITEM_STATE],
    id:id
  };
}
