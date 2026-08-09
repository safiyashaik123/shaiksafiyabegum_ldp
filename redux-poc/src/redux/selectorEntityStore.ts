import { configureStore } from "@reduxjs/toolkit";
import  employeeEntityReducer from "./entity/employeeEntitySlice";

export const selectorEntityStore = configureStore({
  reducer: {
    employeeEntity: employeeEntityReducer,
  },
});

export type SelectorEntityRootState = ReturnType<
  typeof selectorEntityStore.getState
>;

export type SelectorEntityDispatch =
  typeof selectorEntityStore.dispatch;