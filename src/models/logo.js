import { Record, Map } from 'immutable';
import { generateImmutable } from '../shared/model-helper';

const logoModel = new Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const logoCollection = new Record({ data: new Map() });

function setInitialState(initialState){
  return initialState.logo = new logoCollection({
    data: generateImmutable( initialState.logo.data, logoModel )
  });
}

export { logoModel, logoCollection, setInitialState };
