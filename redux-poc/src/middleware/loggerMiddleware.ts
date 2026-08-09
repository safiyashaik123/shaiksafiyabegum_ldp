import {type Middleware } from "@reduxjs/toolkit";

export const loggerMiddleware: Middleware =
  (store) => (next) => (action) => {
    console.log("========== Middleware ==========");

    console.log("Previous State");
    console.log(store.getState());

    console.log("Action");
    console.log(action);

    const result = next(action);

    console.log("Next State");
    console.log(store.getState());

    console.log("===============================");

    return result;
  };