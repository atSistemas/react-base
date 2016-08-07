import expect from 'expect';
import calculatorReducer from '../';
import Types from '../../types';
import { CalculatorModel } from '../../models/';

describe('Calculator', () => {
  describe('Reducer', () => {

    it('Should input an Operator', () => {

      const model = new CalculatorModel();
      const operator = 'MULTIPLY';
      const action = {type:Types.INPUT_OPERATOR, operator: operator};
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('operator');

      expect(expectedData).toEqual(operator);

    });

    it('Should input a Number', () => {

      const number = 2222;
      const model = new CalculatorModel();
      const action = { type: Types.INPUT_NUMBER, value: number };
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).toEqual(number);

    });

    it('Should input a Decimal', () => {

      const number = 2222;
      const decimal = number + '.';
      const model = new CalculatorModel({ prevValue: number });
      const action = {type:Types.INPUT_DECIMAL};
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).toEqual(decimal);

    });

    it('Should Sum two numbers', () => {

      const numberA = 222;
      const numberB = 333;
      const model = new CalculatorModel({ prevValue: numberA, nextValue: numberB, operator: Types.SUM });
      const action = {type: Types.RESULT };
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).toEqual(555);

    });

    it('Should Substract numbers', () => {

      const numberA = 100;
      const numberB = 2;
      const model = new CalculatorModel({ prevValue: numberA, nextValue: numberB, operator: Types.SUBSTRACT });
      const action = {type: Types.RESULT };
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).toEqual(98);

    });

    it('Should Multiply numbers', () => {

      const numberA = 60;
      const numberB = 53;
      const model = new CalculatorModel({ prevValue: numberA, nextValue: numberB, operator: Types.MULTIPLY });
      const action = {type: Types.RESULT };
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).toEqual(3180);

    });

    it('Should Multiply numbers', () => {

      const numberA = 200;
      const numberB = 50;
      const model = new CalculatorModel({ prevValue: numberA, nextValue: numberB, operator: Types.DIVIDE });
      const action = {type: Types.RESULT };
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).toEqual(4);

    });

    it('Should reset Display', () => {

      const numberA = 200;
      const numberB = 50;
      const model = new CalculatorModel({ prevValue: numberA, nextValue: numberB, operator: Types.DIVIDE });
      const action = {type: Types.INPUT_OPERATION, value:Types.CLEAN };
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).toEqual(0);

    });

    it('Should convert to negative', () => {

      const numberA = 200;
      const model = new CalculatorModel({ prevValue: numberA, operator: Types.DIVIDE });
      const action = {type: Types.INPUT_OPERATION, value:Types.CHANGE_SIGN };
      const reducer = calculatorReducer(model, action);
      const expectedData = reducer.get('display');

      expect(expectedData).toEqual('-200');

    });

  });
});
