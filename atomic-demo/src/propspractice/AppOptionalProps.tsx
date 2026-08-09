import Button from "./Button";

function AppOptionalProps() {
  function saveData() {
    alert("Data Saved");
  }

  function deleteData() {
    alert("Data Deleted");
  }

  return (
    <>
      <h1>Optional Props Example</h1>

      <h3>Case 1 : Passing both props</h3>

      <Button
        text="Save"
        onClick={saveData}
      />

      <hr />

      <h3>Case 2 : Passing only text</h3>

      <Button
        text="Delete"
      />

      <hr />

      <h3>Case 3 : Passing only onClick</h3>

      <Button
        onClick={deleteData}
      />

      <hr />

      <h3>Case 4 : Passing no props</h3>

      <Button />
    </>
  );
}

export default AppOptionalProps;