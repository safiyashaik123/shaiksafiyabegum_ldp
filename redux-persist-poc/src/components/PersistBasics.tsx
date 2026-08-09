import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import { login, logout } from "../redux/slices/authSlice";
import { persistor } from "../redux/store";
import {
  increment,
  decrement,
  reset,
} from "../redux/slices/counterSlice";

import { toggleTheme } from "../redux/slices/themeSlice";

function PersistBasics() {
  const dispatch = useDispatch<AppDispatch>();

  const counter = useSelector(
    (state: RootState) => state.counter.value
  );

  const theme = useSelector(
    (state: RootState) => state.theme.mode
  );

  const { isLoggedIn, username } = useSelector(
  (state: RootState) => state.auth
);

  return (
    <div>
      <h1>Redux Persist Basics</h1>

      <hr />

      <h2>Counter : {counter}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>

      <hr />

      <h2>Theme : {theme}</h2>

      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>

      <hr />
      

<h2>Authentication</h2>

<p>
  <strong>Status:</strong>{" "}
  {isLoggedIn ? "Logged In" : "Logged Out"}
</p>

<p>
  <strong>User:</strong>{" "}
  {isLoggedIn ? username : "No User"}
</p>

<button onClick={() => dispatch(login())}>
  Login
</button>
<button
  onClick={() => {
    dispatch(logout());
    persistor.purge();
  }}
>
  Logout
</button>

    </div>
  );
}

export default PersistBasics;