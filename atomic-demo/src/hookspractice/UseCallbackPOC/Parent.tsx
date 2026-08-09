import { useCallback, useState } from "react";
import Child from "./Child";

function Parent() {
  console.log("Parent Rendered");

  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("Light");

  // -------------------------------------
  // BEFORE (Without useCallback)
  // -------------------------------------

//   const handleIncrement = () => {
//     setCount((previousCount) => previousCount + 1);
//   };

  // -------------------------------------
  // AFTER (With useCallback)
  // -------------------------------------

  const handleIncrement = useCallback(() => {
    setCount((previousCount) => previousCount + 1);
  }, []);

  return (
    <>
      <h1>Parent Component</h1>

      <p>Count : {count}</p>

      <p>Theme : {theme}</p>

      <button
        onClick={() =>
          setTheme(
            theme === "Light" ? "Dark" : "Light"
          )
        }
      >
        Change Theme
      </button>

      <hr />

      <Child onIncrement={handleIncrement} />
    </>
  );
}

export default Parent;