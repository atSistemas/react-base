export default function setGlobalState(initialState, models){
  models.modelIndex.map(function(model){
    model.setInitialState(initialState);
  });
}
