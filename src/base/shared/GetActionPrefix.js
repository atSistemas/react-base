export default function getActionPrefix(action) {
  return action.substr(0, action.lastIndexOf('_'));
}
