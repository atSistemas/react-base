'use strict';

jest.unmock('../app');

import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import App from '../app'

describe('app test', () => {

  it('test', () => {
  /* const appElement = TestUtils.renderIntoDocument(
      <App/>
    );*/
    expect(1).toEqual(1);
  });

});