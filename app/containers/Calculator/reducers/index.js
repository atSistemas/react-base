import Types from '../types';
import CreateReducer from 'shared/CreateReducer';
import { CalculatorModel } from '../models';

function undo( state ) { return state; }

function calculate( state, action ) { return state; }

function inputNumber( state, data ) {
  const current = state.get('currentInput');
  const selected = data.value;
  //FIXME
  const next =  current + '' + selected;
  return state.update ( 'currentInput', () => next );
}

function inputOperation( state, action ) {
  return state.update ( 'currentOperation', () => action.result );
}

const actionHandlers = {
  [Types.UNDO]: undo,
  [Types.CALCULATE]: calculate,
  [Types.INPUT_NUMBER]: inputNumber,
  [Types.INPUT_OPERATION]: inputOperation
};

export default CreateReducer(actionHandlers, new CalculatorModel());
