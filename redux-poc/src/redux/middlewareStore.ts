import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./slices/taskSlice";

import { loggerMiddleware } from "../middleware/loggerMiddleware";
import { activityListener } from "../middleware/activityListener";

export const middlewareStore = configureStore({
  reducer: {
    task: taskReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      loggerMiddleware,
      activityListener.middleware
    ),
});

export type MiddlewareRootState = ReturnType<
  typeof middlewareStore.getState
>;

export type MiddlewareDispatch =
  typeof middlewareStore.dispatch;