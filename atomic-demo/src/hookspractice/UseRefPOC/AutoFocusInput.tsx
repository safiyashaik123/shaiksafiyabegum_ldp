import { useEffect, useRef } from "react";

function AutoFocusInput() {

  // ------------------------------------
  // WITHOUT useRef
  // ------------------------------------

  // React doesn't know which input element
  // to focus automatically.

  // ------------------------------------
  // WITH useRef
  // ------------------------------------

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <h2>Auto Focus Input</h2>

      <input
        type="text"
        placeholder="Enter your name"
        ref={inputRef}
      />
    </>
  );
}

export default AutoFocusInput;