export default function setGlobalState(initialState, models) {
  return models.default.modelIndex.map(function(model) {
    return model.setInitialState(initialState);
  });
}
