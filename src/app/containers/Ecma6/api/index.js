import { generateMap } from 'base';
import fetch from 'isomorphic-fetch';
import { Ecma6Model } from '../models';

const url = 'http://localhost:8000/mocks/logo.json';

export default {

  fetchEcma6() {
    return fetch(url)
    .then(req => req.json())
    .then(data => generateMap(data, Ecma6Model));
  }

};
