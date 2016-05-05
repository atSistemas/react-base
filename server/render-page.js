export default function renderPage(content, store){
  return `
  <!doctype html>
	<html lang="utf-8">
  <html>
    <head>
    </head>
    <body>
    <div id="root">${content}</div>
      <script>window.$REACTBASE_STATE = ${store}</script>
      <script src="/static/bundle.js"></script>
    </body>
  </html>
  `
}
