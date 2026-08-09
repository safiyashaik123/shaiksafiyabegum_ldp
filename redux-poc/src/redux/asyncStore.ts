import { configureStore } from "@reduxjs/toolkit";
import asyncEmployeeReducer from "./slices/asyncEmployeeSlice";

export const asyncStore = configureStore({
  reducer: {
    asyncEmployee: asyncEmployeeReducer,
  },
});

export type RootState = ReturnType<typeof asyncStore.getState>;
export type AppDispatch = typeof asyncStore.dispatch;