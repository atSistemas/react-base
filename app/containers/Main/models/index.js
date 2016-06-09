import { Record, Map } from 'immutable';
import { generateImmutable } from 'shared/ModelHelper';

const LogoModel = new Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const LogoCollection = new Record({ data: new Map() });

function setInitialState(initialState){
  return initialState.Main = new LogoCollection({
    data: generateImmutable( initialState.Main.data, LogoModel )
  });
}

export { LogoModel, LogoCollection, setInitialState };
