export default function renderPage(ENV, content, store){

  const common = (ENV === 'production') ? '<script src="/common.js"></script>' : '' 

  return `
  <!doctype html>
	<html lang="utf-8">
  <html>
    <head>
    </head>
    <body>
    <div id="root">${content}</div>
      <script>window.$REACTBASE_STATE = ${store}</script>
    ` + common +  `
    <script src="/bundle.js"></script>
    </body>
  </html>
  `
}
