
export default function main(params) {

  const state = JSON.stringify(params.state);
  const apolloState = JSON.stringify(params.apolloClient.extract());

  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <link rel="icon" href="assets/images/favicon.ico"/>
      <title>React Base</title>
      ${ params.vendorScript }
      ${ params.style }
    </head>
    <body>
    <div id="root">${ params.container }</div>
      <script>window.$REACTBASE_STATE = ${ state }</script>
      <script>window.__APOLLO_STATE__ = ${ apolloState }</script>
      ${ params.appScript }
    </body>
  </html>
  `;
}
