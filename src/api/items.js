import fetch from 'isomorphic-fetch';
import { itemModel } from '../models/items';
import { generateMap } from '../shared/model-helper';

const url = 'http://localhost:8000/mocks/items.json';

export default {

  getItems( category ){
    return fetch(url + '?category=' + category)
    .then(req => req.json())
    .then(data => generateMap(data, itemModel));
  },

  getItem(id){
    return fetch(url + '?id=' + id)
    .then(req => req.json())
    .then(data => data);
  }

};
