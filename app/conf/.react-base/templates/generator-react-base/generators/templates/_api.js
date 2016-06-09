import fetch from 'isomorphic-fetch';
import { <%= namePascal %>Model } from '../models';
import { generateMap } from 'shared/ModelHelper';

const url = 'http://localhost:8000/mocks/logo.json';

export default {

  fetch<%= namePascal %>(){
    return fetch(url)
    .then(req => req.json())
    .then(data => generateMap(data, <%= namePascal %>Model));
  }

};
