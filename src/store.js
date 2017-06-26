import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer } from 'react-router-redux';
import createLogger from 'redux-logger';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  createLogger
)(createStore)

// Add the reducer to your store on the `routing` key
const store = createStoreWithMiddleware(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

export default store;