import { Record, Map } from 'immutable';
import { generateImmutable } from 'shared/model-helper';

const LogoModel = new Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const LogoCollection = new Record({ data: new Map() });

function setInitialState(initialState){
  return initialState.logo = new LogoCollection({
    data: generateImmutable( initialState.logo.data, LogoModel )
  });
}

export { LogoModel, LogoCollection, setInitialState };
