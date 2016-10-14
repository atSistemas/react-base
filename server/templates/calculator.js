
export default function calculator(params) {

  return `
  <!doctype html>
	<html lang="utf-8">
    <head>
      <link rel="icon" href="assets/images/favicon.ico"/>
      <title>Simple Redux Calculator</title>
      ${ params.vendorScript }
      ${ params.style }
    </head>
    <body>
    <div id="root">${ params.container }</div>
      <script>window.$REACTBASE_STATE = ${ params.state }</script>
      ${ params.appScript }
    </body>
  </html>
  `;
}
