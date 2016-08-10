import { Record } from 'immutable';

const CalculatorModel = new Record({
  display:0,
  operator:'',
  operation:'',
  prevValue: 0,
  nextValue: 0,
  newValue: false,
  resetDisplay: false,
});

function setInitialState(initialState){
  return initialState.Calculator = new CalculatorModel();
}

export { CalculatorModel, setInitialState };
