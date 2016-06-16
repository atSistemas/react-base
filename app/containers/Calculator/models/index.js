import { Record, Map } from 'immutable';
import { generateImmutable } from 'shared/ModelHelper';

const CalculatorModel = new Record({
  currentInput:'',
  currentOperation:'',
  history: [],
});

function setInitialState(initialState){
  return initialState.Calculator = new CalculatorModel();
}

export { CalculatorModel, setInitialState };
