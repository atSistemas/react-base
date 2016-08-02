import expect from 'expect';
import * as Actions from '../';
import Types from '../../types';
import { generateFetchTypes } from 'shared/TypeHelper';

describe('Calculator', () => {

  describe('Actions', () => {

    it('Should get all Actions', () => {

      let expected;

      const undo = Actions.undo(3);
      expected = {type: Types.UNDO,value: 3};
      expect(expected).toEqual(undo);

      const calculate = Actions.calculate();
      expected = {type: Types.CALCULATE};
      expect(expected).toEqual(calculate);

      const inputNumber = Actions.inputNumber(3);
      expected = {type: Types.INPUT_NUMBER, value: 3};
      expect(expected).toEqual(inputNumber);

      const inputOperation = Actions.inputOperation('C');
      expected = {type: Types.INPUT_OPERATION, value: 'C'};
      expect(expected).toEqual(inputOperation);

      const inputDecimal = Actions.inputDecimal();
      expected = {type: Types.INPUT_DECIMAL}
      expect(expected).toEqual(inputDecimal);

      const inputOperator = Actions.inputOperator('SUM');
      expected = {type: Types.INPUT_OPERATOR, operator: 'SUM'};
      expect(expected).toEqual(inputOperator);

    });

  });
});
