import { useState } from "react";

const KeyboardFocusEvents = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("No Event");
  const [lastKey, setLastKey] = useState("");

  return (
    <>
      <h2>Keyboard & Focus Events</h2>

      <label>
        Search Employee:
      </label>

      <br />

      <input
        type="text"
        placeholder="Enter employee name"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setStatus("Searching...");
        }}
        onKeyDown={(e) => {
          setLastKey(e.key);
          setStatus("Key Down");
        }}
        onKeyUp={() => {
          setStatus("Key Released");
        }}
        onFocus={() => {
          setStatus("Search Box Focused");
        }}
        onBlur={() => {
          setStatus("Search Box Blurred");
        }}
      />

      <hr />

      <p>
        <strong>Search Text:</strong> {search}
      </p>

      <p>
        <strong>Last Key Pressed:</strong> {lastKey}
      </p>

      <p>
        <strong>Status:</strong> {status}
      </p>
    </>
  );
};

export default KeyboardFocusEvents;