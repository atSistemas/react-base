import { expect } from 'chai';
import reduxCourseReducer from '../';
import { ReduxCourse } from '../../models';
import ActionTypes from '../../actionTypes';

const model = new ReduxCourse();
describe('ReduxCourse', () => {
  describe('Reducer', () => {

    it('Should increment counter value', () => {
      const action = {type:ActionTypes.INCREMENT, payload:{num:2}};
      const reducer = reduxCourseReducer(model, action);
      const result = reducer.get('counter');
      expect(result).to.equal(2);
    });

    it('Should increment counter value', () => {
      const action = {type:ActionTypes.DECREMENT, payload:{num:2}};
      const reducer = reduxCourseReducer(model, action);
      const result = reducer.get('counter');
      expect(result).to.equal(-2);
    });

    it('Should sum two values', () => {
      const action = {type:ActionTypes.SUM, payload:{num:10, num2:10}};
      const reducer = reduxCourseReducer(model, action);
      const result = reducer.get('sum');
      expect(result).to.deep.equal(20);
    });

});
});