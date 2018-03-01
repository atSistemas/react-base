import resolveRequestAction from '../shared/ResolveRequestAction'

const requestMiddleware = store => next => action => {
  const { request, type, ...rest } = action

  if (!request) return next(action)

  store.dispatch({ type, ...rest })

  return request.then(
    res => store.dispatch(resolveRequestAction(action, res, 'SUCCESS')),
    err => store.dispatch(resolveRequestAction(action, err, 'ERROR'))
  )
}

export default requestMiddleware
