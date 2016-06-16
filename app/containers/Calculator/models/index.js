import { Record, Map } from 'immutable';
import { generateImmutable } from 'shared/ModelHelper';

const CalculatorModel = new Record({
  currentValue:0,
  currentOperation:'',
  history: ''
});

const CalculatorCollection = new Record({ data: new Map() });

function setInitialState(initialState){
  return initialState.Calculator = new CalculatorCollection({
    data: generateImmutable( initialState.Calculator.data, CalculatorModel )
  });
}

export { CalculatorModel, CalculatorCollection, setInitialState };
