import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Home() {
  const {
    loginWithRedirect,
    logout,
    isAuthenticated,
    user,
    isLoading,
  } = useAuth0();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Auth0 POC</h1>

      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>
          Login
        </button>
      ) : (
        <>
          <img
            src={user?.picture}
            alt={user?.name}
            width={120}
          />

          <h3>Welcome {user?.name}</h3>

          <h3>Status : Logged In ✅</h3>

          <h3>Email : {user?.email}</h3>

          <Link to="/profile">
            <button>Go to Profile</button>
          </Link>

          <br />
          <br />

          <button
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            }
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default Home;