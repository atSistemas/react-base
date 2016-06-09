import { Record, Map } from 'immutable';
import { generateImmutable } from 'shared/ModelHelper';

const <%= namePascal %>Model = new Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const <%= namePascal %>Collection = new Record({ data: new Map() });

function setInitialState(initialState){
  return initialState.<%= nameState %> = new <%= namePascal %>Collection({
    data: generateImmutable( initialState.<%= nameState %>.data, <%= namePascal %>Model )
  });
}

export { <%= namePascal %>Model, <%= namePascal %>Collection, setInitialState };
