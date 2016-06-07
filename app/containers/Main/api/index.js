import fetch from 'isomorphic-fetch';
import { LogoModel } from '../models';
import { generateMap } from 'shared/model-helper';

const url = 'http://localhost:8000/mocks/logo.json';

export default {

  fetchLogo(){
    return fetch(url)
    .then(req => req.json())
    .then(data => generateMap(data, LogoModel));
  }

};
