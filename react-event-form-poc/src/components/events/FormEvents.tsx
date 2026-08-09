import { useState } from "react";

const FormEvents = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent browser refresh
        
    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }

    setSubmittedName(name);
    setName("");
  };

  return (
    <>
      <h2>Form Events</h2>

      <form onSubmit={handleSubmit}>
        <label>Name : </label>

        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <hr />

      <p>
        <strong>Submitted Name :</strong>{" "}
        {submittedName || "Not Submitted"}
      </p>

      <p>
        <strong>Concept Used :</strong> onSubmit + preventDefault()
      </p>
    </>
  );
};

export default FormEvents;