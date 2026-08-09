import { useReducer } from "react";

type Action =
  | { type: "DEPOSIT" }
  | { type: "WITHDRAW" }
  | { type: "RESET" };

const initialBalance = 1000;

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "DEPOSIT":
      return state + 500;

    case "WITHDRAW":
      return state - 500;

    case "RESET":
      return initialBalance;

    default:
      return state;
  }
}

function BankAccount() {

  const [balance, dispatch] = useReducer(
    reducer,
    initialBalance
  );

  return (
    <>
      <h2>Bank Account</h2>

      <h3>Balance : ₹{balance}</h3>

      <button
        onClick={() =>
          dispatch({ type: "DEPOSIT" })
        }
      >
        Deposit ₹500
      </button>

      <button
        onClick={() =>
          dispatch({ type: "WITHDRAW" })
        }
      >
        Withdraw ₹500
      </button>

      <button
        onClick={() =>
          dispatch({ type: "RESET" })
        }
      >
        Reset
      </button>
    </>
  );
}

export default BankAccount;