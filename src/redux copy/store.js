import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducers';
// (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const middleware = [thunk];

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
