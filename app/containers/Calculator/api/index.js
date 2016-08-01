import fetch from 'isomorphic-fetch';
import { CalculatorModel } from '../models';
import { generateMap } from 'shared/ModelHelper';

const url = 'http://localhost:8000/mocks/logo.json';

export default {

  fetchCalculator(){
    return fetch(url)
      .then(req => req.json())
      .then(data => generateMap(data, CalculatorModel));
  }

};
