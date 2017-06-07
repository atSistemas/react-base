import { Record, Map } from 'immutable';

const ReduxExercisesModel = {counter: 0};

const ReduxExercisesCollection = new Record({ data: new Map() });

function setInitialState(initialState) {
}

export { ReduxExercisesModel, ReduxExercisesCollection, setInitialState };
