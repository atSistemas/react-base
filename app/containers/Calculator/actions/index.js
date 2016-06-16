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

export function inputOperation(operation) {
  return {
    type: Types.INPUT_OPEATION,
    operation
  };
}
