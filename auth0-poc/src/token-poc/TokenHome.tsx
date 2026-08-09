import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  iss: string;
  sub: string;
  aud: string | string[];
  iat: number;
  exp: number;
}

function TokenHome() {
  const { user, getAccessTokenSilently } = useAuth0();

  const [accessToken, setAccessToken] = useState("");
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null);

  const handleGetToken = async () => {
    try {
      const token = await getAccessTokenSilently();

      setAccessToken(token);

      const decoded = jwtDecode<JwtPayload>(token);

      setDecodedToken(decoded);
    } catch (error) {
      console.error("Token Error :", error);
    }
  };

  return (
    <div>
      <h1>Auth0 Token POC</h1>

      <h2>Welcome {user?.name}</h2>

      <button onClick={handleGetToken}>
        Get Access Token
      </button>

      <h2>Access Token</h2>

      <textarea
        rows={10}
        cols={100}
        value={accessToken}
        readOnly
      />

      {decodedToken && (
        <>
          <h2>Decoded JWT Claims</h2>

          <h3>Issuer :</h3>
          <p>{decodedToken.iss}</p>

          <h3>Subject :</h3>
          <p>{decodedToken.sub}</p>

          <h3>Audience :</h3>
          <p>
            {Array.isArray(decodedToken.aud)
              ? decodedToken.aud.join(", ")
              : decodedToken.aud}
          </p>

          <h3>Issued At :</h3>
          <p>
            {new Date(decodedToken.iat * 1000).toLocaleString()}
          </p>

          <h3>Expires At :</h3>
          <p>
            {new Date(decodedToken.exp * 1000).toLocaleString()}
          </p>
        </>
      )}
    </div>
  );
}

export default TokenHome;