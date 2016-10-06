
import getScripts  from '../lib/GetScripts';

export default function renderMainPage(ENV, view, store){

  const appScript = getScripts('app');
  const vendorScript = getScripts('vendor');
  const state = JSON.stringify( store.getState() );
  const style = (ENV === 'production') ? '<link rel="stylesheet" href="bundle.css">' : '';

  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <link rel="icon" href="assets/images/favicon.ico"/>
      <title>React Base</title>
      ${ vendorScript }
      ${ style }
    </head>
    <body>
    <div id="root">${ view }</div>
      <script>window.$REACTBASE_STATE = ${ state }</script>
      ${ appScript }
    </body>
  </html>
  `;
}
