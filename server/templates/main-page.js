export default function renderMainPage(ENV, view, store){

  const state = JSON.stringify( store.getState() );
  const common = (ENV === 'production') ? '<script src="/common.js"></script>' : '';

  return `
  <!doctype html>
	<html lang="utf-8">
  <html>
    <head>
    <link rel="stylesheet" href="bundle.css">
    </head>
    <body>
    <div id="root">${ view }</div>
      <script>window.$REACTBASE_STATE = ${ state }</script>
      ${ common }
    <script src="/bundle.js"></script>
    </body>
  </html>
  `;
}
