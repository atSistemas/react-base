import { expect }  from 'chai';
import * as Actions from '../';
import Types from '../../types';
import { generateFetchTypes } from 'shared/TypeHelper';

describe('Calculator', () => {

  describe('Actions', () => {

    it('Should get all Actions', () => {

      let expected;

      const inputNumber = Actions.inputNumber(3);
      expected = {type: Types.INPUT_NUMBER, value: 3};
      expect(expected).to.deep.equal(inputNumber);

      const inputOperation = Actions.inputOperation(Types.CLEAN);
      expected = {type: Types.INPUT_OPERATION, value: Types.CLEAN};
      expect(expected).to.deep.equal(inputOperation);

      const inputDecimal = Actions.inputDecimal();
      expected = {type: Types.INPUT_DECIMAL}
      expect(expected).to.deep.equal(inputDecimal);

      const inputOperator = Actions.inputOperator(Types.SUM);
      expected = {type: Types.INPUT_OPERATOR, operator: Types.SUM};
      expect(expected).to.deep.equal(inputOperator);

    });

  });
});
