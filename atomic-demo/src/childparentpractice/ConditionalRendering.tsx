import { useState } from "react";

function ConditionalRendering() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <h1>Student Portal</h1>

      <button onClick={login}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <hr />

      {/* Ternary Operator */}

      <h2>Ternary Operator</h2>

      {
        isLoggedIn
          ? <h3>✅ Welcome Safiya</h3>
          : <h3>❌ Please Login</h3>
      }

      <hr />

      {/* AND Operator */}

      <h2>AND Operator</h2>

      {
        isLoggedIn &&
        <h3>🎉 You have successfully logged in.</h3>
      }

    </>
  );
}

export default ConditionalRendering;