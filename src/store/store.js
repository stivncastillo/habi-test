import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'info',
  storage: storage,
  whitelist: ['info'] // which reducer want to store
};
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const pReducer = persistReducer(persistConfig, reducers);
const store = createStore(pReducer, applyMiddleware(...middleware));
// const store = createStore(reducers, applyMiddleware(...middleware));

const persistor = persistStore(store);
export { persistor, store };

export default store;