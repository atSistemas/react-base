import * as models from '../models';
import setGlobalState from './global-state';

const initialState = window.$REACTBASE_STATE || {};
setGlobalState(initialState, models);

export default initialState;
