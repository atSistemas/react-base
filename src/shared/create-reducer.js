import Immutable from 'immutable'

export default function createReducer (actionHandlers, initialState = window ? window.$REACTBASE_STATE : {}) {

  return (state = Immutable.fromJS(initialState), action) => {
    const reduceFn = actionHandlers[action.type];
    if (reduceFn) {
      return reduceFn(state, action);
    } else {
      return state;
    }
  };
}
