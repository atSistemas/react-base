export default function fetchServerData(dispatch, components, params) {

  const needs = components.reduce( (prev, current) => {

  	return Object.keys(current).reduce( (acc, key) => {
  		return current[key].hasOwnProperty('needs') ? current[key].needs.concat(acc) : acc
  	}, prev)

  }, []);

  const promises = needs.map(need => dispatch(need(params)));

  return Promise.all(promises);
}
