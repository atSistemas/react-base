import fetch from 'isomorphic-fetch';
import { logoModel } from '../models/logo';
import { generateMap } from '../shared/model-helper';

const url = 'http://localhost:8000/mocks/logo.json';

export default {

  getLogo(){
    return fetch(url)
    .then(req => req.json())
    .then(data => generateMap(data, logoModel));
  }

};
