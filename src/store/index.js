import { createStore,  compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

console.log('reducer',  reducer)
// 开启redux-dev-tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
	applyMiddleware(thunk)
));

export default store;
