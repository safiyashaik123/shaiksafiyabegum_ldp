import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";

import counterReducer from "./slices/counterSlice";
import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/authSlice";
import { persistConfig } from "./persistConfig";

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;