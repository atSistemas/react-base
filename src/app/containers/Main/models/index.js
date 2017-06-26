import { Record } from 'immutable';

const MainModel = Record({
  id: 0,
  src: '',
  alt: '',
  name: '',
  width: 0,
});

function setInitialState(initialState) {
  return initialState.Main = new MainModel(initialState.Main);
}

export { MainModel, setInitialState };
