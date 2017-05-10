import * as console from './shared/console';
import env from './shared/Env';

export default { console, env};
export { actionCreator } from './shared/ActionCreator';
export { createReducer } from './shared/CreateReducer';
export { typeBuilder } from './shared/TypeHelper';
export { generateFetchTypes } from './shared/TypeHelper';
export { fetchRequiredActions } from './shared/FetchData';