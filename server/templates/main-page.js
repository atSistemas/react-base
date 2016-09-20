export default function renderMainPage(ENV, view, store){

  const state = JSON.stringify( store.getState() );
  const vendor = (ENV === 'production') ? '<script src="/vendor.js"></script>' : '<script src="/dlls/vendor.js"></script>';
  const style = (ENV === 'production') ? '<link rel="stylesheet" href="bundle.css">' : '';
  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <link rel="icon" href="assets/images/favicon.ico"/>
      <title>React Base</title>
      ${ style }
      ${ vendor }
    </head>
    <body>
    <div id="root">${ view }</div>
      <script>window.$REACTBASE_STATE = ${ state }</script>
    <script src="/app.js"></script>
    </body>
  </html>
  `;
}
