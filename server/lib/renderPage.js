import ENV from '../../src/base/shared/Env';
import getScripts  from '../lib/GetScripts';
import * as templates from '../templates/';

export default function renderPage(routeMatch, container, store){

  const params = {
    routeMatch: routeMatch,
    container: container,
    appScript: getScripts('app'),
    vendorScript: getScripts('vendor'),
    state: JSON.stringify( store.getState()),
    style: (ENV === 'production') ? '<link rel="stylesheet" href="bundle.css">' : ''
  };

  const template = templates[routeMatch.substring(1)];

  if (routeMatch === '/' || !template) return templates.main(params);
  else return template(params);

}
