// store.js
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import authReducer from './AuthSlice';

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['Auth']
};

const Reducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
    reducer: {
        Auth: Reducer
    }
});

export const persistor = persistStore(store);
export default store;
