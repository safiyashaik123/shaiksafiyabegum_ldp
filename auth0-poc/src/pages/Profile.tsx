import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return <h2>Please Login First</h2>;
  }

  return (
    <div>
      <h1>Profile Page</h1>

      <img
        src={user?.picture}
        alt={user?.name}
        width={120}
      />

      <h3>Name : {user?.name}</h3>

      <h3>Email : {user?.email}</h3>

      <h3>Nickname : {user?.nickname}</h3>

      <h3>User ID : {user?.sub}</h3>

      {/* <h3>
        Email Verified : {user?.email_verified ? "Yes ✅" : "No ❌"}
      </h3> */}

      <br />

      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default Profile;