import { configureStore } from "@reduxjs/toolkit";

import { employeeApi } from "../services/employeeApi";

export const queryStore = configureStore({
  reducer: {
    [employeeApi.reducerPath]: employeeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      employeeApi.middleware
    ),
});

export type QueryRootState = ReturnType<
  typeof queryStore.getState
>;

export type QueryDispatch =
  typeof queryStore.dispatch;