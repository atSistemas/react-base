export default function setGlobalState(initialState, models){
  models.data.map(function(model){
    model.setInitialState(initialState);
  });
}
