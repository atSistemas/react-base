import { Record, Map } from 'immutable';
import { generateImmutable } from 'base';

const Ecma6Model = new Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const Ecma6Collection = new Record({ data: new Map() });

function setInitialState(initialState) {
  return initialState.Ecma6 = new Ecma6Collection({
    data: generateImmutable( initialState.Ecma6.data, Ecma6Model )
  });
}

export { Ecma6Model, Ecma6Collection, setInitialState };
