import { expect } from 'chai';
import calculatorReducer from '../';
import ActionTypes from '../../actionTypes';
import { CalculatorModel } from '../../models/';

describe('Calculator', () => {
  describe('Reducer', () => {

    it('Should input an Operator', () => {

      const model = new CalculatorModel();
      const operator = 'MULTIPLY';
      const action = {type:ActionTypes.INPUT_OPERATOR, payload:{operator: operator}};
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('operator');

      expect(expectedData).to.equal(operator);

    });

    it('Should input a Number', () => {

      const number = 2222;
      const model = new CalculatorModel();
      const action = { type: ActionTypes.INPUT_NUMBER, payload: {value: number }};
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).to.equal(number);

    });

    it('Should input a Decimal', () => {

      const number = 2222;
      const decimal = number + '.';
      const model = new CalculatorModel({ prevValue: number });
      const action = {type:ActionTypes.INPUT_DECIMAL};
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).to.equal(decimal);

    });

    it('Should Sum two numbers', () => {

      const numberA = 222;
      const numberB = 333;
      const model = new CalculatorModel({ prevValue: numberA, nextValue: numberB, operator: ActionTypes.SUM });
      const action = {type: ActionTypes.RESULT };
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).to.equal(555);

    });

    it('Should Substract numbers', () => {

      const numberA = 100;
      const numberB = 2;
      const model = new CalculatorModel({ prevValue: numberA, nextValue: numberB, operator: ActionTypes.SUBSTRACT });
      const action = {type: ActionTypes.RESULT };
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).to.equal(98);

    });

    it('Should Multiply numbers', () => {

      const numberA = 60;
      const numberB = 53;
      const model = new CalculatorModel({ prevValue: numberA, nextValue: numberB, operator: ActionTypes.MULTIPLY });
      const action = {type: ActionTypes.RESULT };
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).to.equal(3180);

    });

    it('Should Multiply numbers', () => {

      const numberA = 200;
      const numberB = 50;
      const model = new CalculatorModel({ prevValue: numberA, nextValue: numberB, operator: ActionTypes.DIVIDE });
      const action = {type: ActionTypes.RESULT };
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).to.equal(4);

    });

    it('Should reset Display', () => {

      const numberA = 200;
      const numberB = 50;
      const model = new CalculatorModel({ prevValue: numberA, nextValue: numberB, operator: ActionTypes.DIVIDE });
      const action = {type: ActionTypes.INPUT_OPERATION, payload:{value:ActionTypes.CLEAN }};
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).to.equal(0);

    });

    it('Should convert to negative', () => {

      const numberA = 200;
      const model = new CalculatorModel({ prevValue: numberA, operator: ActionTypes.DIVIDE });
      const action = {type: ActionTypes.INPUT_OPERATION, payload:{value:ActionTypes.CHANGE_SIGN }};
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).to.equal(-200);

    });

  });
});