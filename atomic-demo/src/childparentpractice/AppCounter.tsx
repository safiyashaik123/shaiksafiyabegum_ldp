import { useState } from "react";
import CounterButton from "./CounterButton";

function AppCounter() {

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Parent Count : {count}</h1>

      <CounterButton
        onIncrease={increaseCount}
      />
    </>
  );
}

export default AppCounter;