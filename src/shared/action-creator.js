function createAction(type, ...argNames) {
  return function(...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    action.timeStamp = Date.now()
    return action
  }
}

export default createAction
