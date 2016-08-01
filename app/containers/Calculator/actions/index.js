import Types from '../types';

export function undo( value ){
  return {
    type: Types.UNDO,
    value
  };
}

export function calculate(){
  return {
    type: Types.CALCULATE
  };
}

export function inputNumber(value){
  return {
    type: Types.INPUT_NUMBER,
    value
  };
}

export function inputOperation(value){
  return {
    type: Types.INPUT_OPERATION,
    value
  };
}

export function inputDecimal(){
  return {
    type: Types.INPUT_DECIMAL
  };
}

export function inputOperator(operator) {
  return {
    type: Types.INPUT_OPERATOR,
    operator
  };
}
