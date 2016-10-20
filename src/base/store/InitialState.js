import * as models from '../models';
import setGlobalState from './GlobalState';

const initialState = window.$REACTBASE_STATE || {};

setGlobalState(initialState, models);

export default initialState;
