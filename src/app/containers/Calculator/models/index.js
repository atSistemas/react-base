import { Record } from 'immutable'

const CalculatorModel = Record({
  display: 0,
  operator: '',
  operation: '',
  prevValue: 0,
  nextValue: 0,
  newValue: false,
  resetDisplay: false
})

function setInitialState (initialState) {
  initialState.Calculator = new CalculatorModel()
  return initialState.Calculator
}

export { CalculatorModel, setInitialState }
