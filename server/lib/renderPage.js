import base from 'base';
import getScripts  from '../lib/GetScripts';
import * as templates from '../templates/';

export default function renderPage(routeMatch, container, store){

  const params = {
    container: container,
    routeMatch: routeMatch,
    appScript: getScripts('app'),
    vendorScript: getScripts('vendor'),
    state: JSON.stringify( store.getState()),
    style: (base.env === 'production') ? '<link rel="stylesheet" href="/bundle.css">' : ''
  };

  const template = templates[routeMatch.substring(1)];

  if (routeMatch === '/' || !template) return templates.main(params);
  else return template(params);

}
