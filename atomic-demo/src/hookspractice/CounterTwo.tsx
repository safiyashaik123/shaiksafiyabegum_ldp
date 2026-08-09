import useCounter from "./hooks/useCounter";

function CounterTwo() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <>
      <h2>Counter Two</h2>

      <h3>{count}</h3>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </>
  );
}

export default CounterTwo;