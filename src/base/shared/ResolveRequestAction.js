import getActionPrefix from './GetActionPrefix'

const resolveRequestAction = (action, response, result) => {
  return {
    type: `${getActionPrefix(action.type)}_${result}`,
    payload: response
  }
}

export default resolveRequestAction
