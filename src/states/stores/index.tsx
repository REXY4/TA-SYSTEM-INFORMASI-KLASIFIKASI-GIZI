
'use client'
import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from 'redux-thunk';
import reducer from 'states/reducers';
//reducers

const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: [],
    whitelist: ["user", "knn", "svm", "training"]
}

const persistedReducer = persistReducer(
    persistConfig,
    reducer,
)
export let store = createStore(persistedReducer, applyMiddleware(thunk));
export type AppRootState = ReturnType<typeof store.getState>;
export let persistore = persistStore(store);