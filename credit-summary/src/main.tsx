// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import theme from "./theme/theme";
import CustomThemeProvider from "./theme/CustomThemeProvider";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <CustomThemeProvider theme={theme}>
      <App />
    </CustomThemeProvider>
  </React.StrictMode>
);