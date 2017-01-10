import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../../src/base/reducers/';
import requestMiddleware from '../../src/base/middleware/Request';

const configureStore = applyMiddleware( requestMiddleware )( createStore );
export default configureStore(rootReducer);
