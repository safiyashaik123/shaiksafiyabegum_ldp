import { useEffect, useState } from "react";

function Greeting() {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name !== "") {
      console.log("useEffect Executed");
      document.title = `Hello ${name}`;
    }
  }, [name]);

  return (
    <>
      <h2>Greeting App</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <h3>Hello {name}</h3>
    </>
  );
}

export default Greeting;