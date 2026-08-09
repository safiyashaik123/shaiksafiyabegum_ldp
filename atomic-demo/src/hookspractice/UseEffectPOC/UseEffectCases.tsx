import { useEffect, useState } from "react";

function UseEffectCases() {
  const [count, setCount] = useState(0);

  // Runs after every render
  useEffect(() => {
    console.log("No Dependency Array");
  });

  // Runs only once
  useEffect(() => {
    console.log("Empty Dependency Array");
  }, []);

  // Runs when count changes
  useEffect(() => {
    console.log("Count Changed");
  }, [count]);

  return (
    <>
      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default UseEffectCases;