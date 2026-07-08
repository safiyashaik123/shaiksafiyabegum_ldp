import { useState } from "react";

function VirtualDom() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Counter Application</h1>

      <h2>{count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default VirtualDom;