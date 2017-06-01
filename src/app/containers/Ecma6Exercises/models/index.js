import { Record, Map } from 'immutable';
import { generateImmutable } from 'base';

const Ecma6ExercisesModel = new Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const Ecma6ExercisesCollection = new Record({ data: new Map() });

function setInitialState(initialState) {
  return initialState.Ecma6Exercises = new Ecma6ExercisesCollection({
    data: generateImmutable( initialState.Ecma6Exercises.data, Ecma6ExercisesModel )
  });
}

export { Ecma6ExercisesModel, Ecma6ExercisesCollection, setInitialState };
