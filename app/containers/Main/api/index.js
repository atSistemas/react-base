import fetch from 'isomorphic-fetch';
import { generateMap } from 'shared/ModelHelper';

import { LogoModel } from '../models';

const url = 'http://localhost:8000/mocks/logo.json';

export default {

  fetchLogo(){
    return fetch(url)
    .then(req => req.json())
    .then(data => generateMap(data, LogoModel));
  }

};
