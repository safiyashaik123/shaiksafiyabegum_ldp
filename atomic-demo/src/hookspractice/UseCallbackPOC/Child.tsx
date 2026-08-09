import React from "react";

type ChildProps = {
  onIncrement: () => void;
};

const Child = React.memo(({ onIncrement }: ChildProps) => {
  console.log("Child Rendered");

  return (
    <>
      <h2>Child Component</h2>

      <button onClick={onIncrement}>
        Increment Counter
      </button>
    </>
  );
});

export default Child;