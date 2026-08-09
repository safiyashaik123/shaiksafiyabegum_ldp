import {
  createListenerMiddleware,
} from "@reduxjs/toolkit";

import {
  addTask,
  toggleTask,
} from "../redux/slices/taskSlice";

export const activityListener =
  createListenerMiddleware();

activityListener.startListening({
  actionCreator: addTask,

  effect: async (action, listenerApi) => {
    console.log("Task Added");
    console.log(action.payload);

    console.log("Current State");
    console.log(listenerApi.getState());
  },
});

activityListener.startListening({
  actionCreator: toggleTask,

  effect: async (_, listenerApi) => {
    console.log("Task Completion Changed");

    console.log("Updated State");
    console.log(listenerApi.getState());
  },
});