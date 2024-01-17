import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore.js";

const rootReducer = combineReducers({ user: userReducer });

const persisConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persisConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
