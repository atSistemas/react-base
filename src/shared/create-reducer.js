import Immutable, { Map, List } from 'immutable'
/*
export default function createReducer (actionHandlers, initialState = window ? window.$REACTBASE_STATE : {}) {

  return (state = Immutable.fromJS(initialState), action) => {
    const reduceFn = actionHandlers[action.type];
    if (reduceFn) {
      return reduceFn(state, action);
    } else {
      return state;
    }
  };
}*/

export default function createReducer (actionHandlers, initialState) {
  return (state = initialState, action) => {
    if (!Map.isMap(state) && !List.isList(state)) {
      state = Immutable.fromJS(state);
    }

    const handler = actionHandlers[action.type];
    if (!handler) return state

    state = handler(state, action);
    /*if (!Map.isMap(state) && !List.isList(state)) {
       throw new TypeError('Reducers must return Immutable objects.');
    }*/

    return state
  }
}
