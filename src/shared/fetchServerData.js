export default function fetchServerData() {
  let { query, params } = renderProps;
  return new Promise(function(resolve, reject) {
    let comp = renderProps.components[renderProps.components.length - 1].WrappedComponent;
    let url = req.protocol + '://' + req.get('host')
    resolve(comp.fetchData({ params, store, url }));
  });
}
