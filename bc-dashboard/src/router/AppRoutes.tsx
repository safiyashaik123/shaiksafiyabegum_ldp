import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import CashAcceleration from "../pages/CashAcceleration/CashAcceleration";

const AppRoutes = () => {
  const [loggedOut, setLoggedOut] = useState(false);

  if (loggedOut) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              onLogout={() => setLoggedOut(true)}
            />
          }
        />

        <Route
          path="/cash-acceleration"
          element={
            <CashAcceleration
              onLogout={() => setLoggedOut(true)}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;