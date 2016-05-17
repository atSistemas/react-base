export default function fetchRequiredActions(  ){
  const args = Array.prototype.slice.call(arguments)
  const serverContext = !!~args.indexOf('server')
  return (serverContext) ?  fetchServerData.apply(this, args) : fetchClientData.apply(this, args)
}

function fetchServerData(dispatch, components, params) {
  const actions = components.reduce( (prev, current) => {
    return Object.keys(current).reduce( (acc, key) => {
      return current[key].hasOwnProperty('requiredActions') ? current[key].requiredActions.concat(acc) : acc
    }, prev)

  }, [])

  const promises = actions.map(action => dispatch(action(params)));
  return Promise.all(promises)
}

function fetchClientData( actions, props, checkData){
  const { params, dispatch } = props
  if(!checkData) actions.map( action => dispatch(action(params)) )
}
