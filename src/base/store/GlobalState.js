export default function setGlobalState(initialState, models){
  models.default.modelIndex.map(function(model){
    model.setInitialState(initialState);
  });
}
