export function createReducer (actionHandler, initialState) {
  return (state = initialState, action) => {

    const handler = actionHandler[action.type];

    if (!handler) return state;

    state = handler(state, action);

    return state;
  };

}
