export const fetchRequiredActions = (...args) => {
  const serverContext = ~args.indexOf('server');
  return serverContext ?
    fetchServerData.apply(this, args)
    :
    fetchClientData.apply(this, args);
};

const fetchServerData = (dispatch, components, params) => {
  const actions = components.reduce((prev, current) => (
    Object.keys(current).reduce((acc, key) => {
      const hasRequiredActions = current[key].hasOwnProperty('requiredActions');
      return hasRequiredActions ? current[key].requiredActions.concat(acc) : acc;
    }, prev)
  ), []);
  const requiredActions = actions.map(action => dispatch(action(params)));
  return Promise.all(requiredActions);
};

const fetchClientData = (actions, props, force = false) => {
  const { params, dispatch } = props;
  force && actions.map(action => dispatch(action(params)));
};
