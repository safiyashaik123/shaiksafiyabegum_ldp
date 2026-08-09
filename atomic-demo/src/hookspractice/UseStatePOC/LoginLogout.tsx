import { useState } from "react";

function LoginLogout() {
  // State to track whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Login function
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <h2>Login Example</h2>

      {isLoggedIn ? (
        <>
          <h3>Welcome, Safiya!</h3>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h3>Please Login</h3>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </>
  );
}

export default LoginLogout;