export default function requestMiddleware(  ) {

  return (next) => (action) => {
    const { request, types, ...rest } = action

    if (!request) return next(action)

    const [REQUEST, SUCCESS, ERROR] = types

    next({ ...rest, type: REQUEST })
    return request.then(
      (result) => next({ ...rest, result, type: SUCCESS }),
      (error) => next({ ...rest, error, type: ERROR })
    )
  }
}
