const setGlobalState = (initialState, models) => (
  models.default.modelIndex.map(model => (
    model.setInitialState(initialState)
  ))
);

export default setGlobalState;