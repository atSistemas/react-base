import { expect } from 'chai';
import ReactBaseError from '../Errors';

describe('shared / Errors', () => {

  describe('Error', () => {

    it('should be an Error prototype', () => {

      const err = new ReactBaseError('foo');
      const isErr = err instanceof Error;
      expect(isErr).to.equal(true);

  });

  it('should have a name and error msg ', () => {

    const msg = 'test';
    const err = new ReactBaseError(msg);
    expect(err.name).to.equal('React Base Error');
    expect(err.msg).to.equal('[BASE ERROR] test');

  });
});

});
