export default function fetchRequiredActions(...args){
  const serverContext = !!~args.indexOf('server');
  return (serverContext) ?  fetchServerData.apply(this, args) : fetchClientData.apply(this, args);
}

function fetchServerData(dispatch, components, params) {
  const actions = components.reduce( (prev, current) => {
    return Object.keys(current).reduce( (acc, key) => {
      return current[key].hasOwnProperty('requiredActions') ?
      current[key].requiredActions.concat(acc) : acc;
    }, prev);

  }, []);
  const requiredActions = actions.map(action => dispatch(action(params)));
  return Promise.all(requiredActions);
}

function fetchClientData( actions, props, node, force = false){
  const checkSize = props[node].data.size;
  const { params, dispatch } = props;
  if(!checkSize || force) actions.map( action => dispatch(action(params)) );
}
