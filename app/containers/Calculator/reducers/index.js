import Types from '../types';
import CreateReducer from 'shared/CreateReducer';
import { CalculatorCollection } from '../models';

function undo( state ) { return state; }

function calculate( state ) { return state; }

function inputNumber( state ) { return state; }

function inputOperation( state, action ) {
  return state.update ( 'data', () => action.result );
}

const actionHandlers = {
  [Types.UNDO]: undo,
  [Types.CALCULATE]: calculate,
  [Types.INPUT_NUMBER]: inputNumber,
  [Types.INPUT_OPERATION]: inputOperation
};

export default CreateReducer(actionHandlers, new CalculatorCollection());
