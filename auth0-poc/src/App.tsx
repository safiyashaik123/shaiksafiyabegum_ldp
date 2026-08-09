import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import TokenHome from "./token-poc/TokenHome";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
       <Route
        path="/token"
        element={
          <ProtectedRoute>
            <TokenHome />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;




// import OAuthFlow from "./components/OAuthFlow";

// function App() {
//   return <OAuthFlow />;
// }

// export default App;