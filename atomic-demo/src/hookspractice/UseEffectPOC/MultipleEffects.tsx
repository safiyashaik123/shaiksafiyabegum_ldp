import { useEffect, useState } from "react";

function MultipleEffects() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Runs only once
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // Runs when count changes
  useEffect(() => {
    console.log("Count Changed:", count);
  }, [count]);

  // Runs when name changes
  useEffect(() => {
    console.log("Name Changed:", name);
  }, [name]);

  return (
    <>
      <h2>Multiple useEffect Example</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <br />
      <br />

      <h3>Count : {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default MultipleEffects;