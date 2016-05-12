export default function promiseMiddleware(  ) {

  return (next) => (action) => {

    const { execute, types, ...rest } = action

    if (!execute) {
      return next(action)
    }

    const [REQUEST, SUCCESS, ERROR] = types

    next({ ...rest, type: REQUEST })

    return execute.then(
      (result) => next({ ...rest, result, type: SUCCESS }),
      (error) => next({ ...rest, error, type: ERROR })
    )
  }
}
