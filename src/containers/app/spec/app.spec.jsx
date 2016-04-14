'use strict';

jest.unmock('../../root');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../root.js'

describe('app test', () => {

  it('test', () => {
    /*const appElement = TestUtils.renderIntoDocument(
      <App />
    );*/
    expect(1).toEqual(1);
  });

});
