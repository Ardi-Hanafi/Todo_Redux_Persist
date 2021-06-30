import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger';
import reducer from './reducer';

const persistedReducer = persistReducer({key:'root', storage}, reducer)
export const store = createStore(persistedReducer, {}, applyMiddleware(logger))
export const persistor = persistStore(store)