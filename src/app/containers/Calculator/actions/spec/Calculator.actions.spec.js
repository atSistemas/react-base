import { expect }  from 'chai';
import * as Actions from '../';
import ActionTypes from '../../actionTypes';
import { generateFetchTypes } from 'base';

describe('Calculator', () => {

  describe('Actions', () => {

    it('Should get all Actions', () => {

      let expected;

      const inputNumber = Actions.inputNumber(3);
      expected = {type: ActionTypes.INPUT_NUMBER, payload: {value: 3 }};
      expect(expected).to.deep.equal(inputNumber);

      const inputOperation = Actions.inputOperation(ActionTypes.CLEAN);
      expected = {type: ActionTypes.INPUT_OPERATION, payload: {value: ActionTypes.CLEAN}};
      expect(expected).to.deep.equal(inputOperation);

      const inputDecimal = Actions.inputDecimal();
      expected = {type: ActionTypes.INPUT_DECIMAL}
      expect(expected).to.deep.equal(inputDecimal);

      const inputOperator = Actions.inputOperator(ActionTypes.SUM);
      expected = {type: ActionTypes.INPUT_OPERATOR, payload: {operator: ActionTypes.SUM}};
      expect(expected).to.deep.equal(inputOperator);

    });

  });
});
