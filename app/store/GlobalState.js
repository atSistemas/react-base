export default function setGlobalState(initialState, models){
  models.modelsIndex.map(function(model){
    model.setInitialState(initialState);
  });
}
