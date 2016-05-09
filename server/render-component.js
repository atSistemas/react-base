export default function renderPage(content, store, component){
  const comp = component || 'root'
  return `
    <div id="` + comp + `">${content}</div>
      <script>window.$REACTBASE_STATE = ${store}</script>
      <script src="/static/bundle.js"></script>
    </div>
  `
}
