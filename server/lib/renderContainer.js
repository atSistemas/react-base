import React from 'react';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import { renderToStaticMarkup } from 'react-dom/server';

export default function renderContainer(store, renderProps) {

  return renderToStaticMarkup(
    <Provider store={ store }>
      <RouterContext { ...renderProps } />
    </Provider>
 );

}
