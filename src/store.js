import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducers from './reducers';
// import sagas from './sagas';

// const sagaMiddleware = createSagaMiddleware();

// const middlewares = [sagaMiddleware];
const middlewares = [];

const enhancers = [applyMiddleware(...middlewares), autoRehydrate()];

/* eslint-disable no-process-env */
const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/* eslint-enable no-process-env */

const store = createStore(reducers, composeEnhancers(...enhancers));

persistStore(store);

// sagaMiddleware.run(sagas);

export default store;
