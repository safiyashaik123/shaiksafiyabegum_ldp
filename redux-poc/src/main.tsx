// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";

// import App from "./App.tsx";
// import "./index.css";

// import { store } from "./redux/store";

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { asyncStore } from "./redux/asyncStore";
//import { selectorEntityStore } from "./redux/selectorEntityStore";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={asyncStore}>
    {/* <Provider store={selectorEntityStore}> */}
      <App />
    </Provider>
  </React.StrictMode>
);

