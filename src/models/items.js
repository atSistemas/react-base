import { Record, Map } from 'immutable';
import { generateImmutable } from '../shared/model-helper';

const itemModel = new Record({
  id: 0,
  userId: 0,
  title: '',
  body: ''
});

const itemCollection = new Record({ data: new Map() });

function setInitialState(initialState){
  return initialState.items = new itemCollection({
    data: generateImmutable( initialState.items.data, itemModel )
  });
}

export { itemModel, itemCollection, setInitialState };
