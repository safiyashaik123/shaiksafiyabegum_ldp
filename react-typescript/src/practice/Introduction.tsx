function Introduction() {
  const name = "Safiya";
  const course = "React + TypeScript";
  const year = 3;

  function college() {
    return "SRKR Engineering College";
  }

  return (
    <>
      <h1>JSX Practice</h1>

      <h2>Name: {name}</h2>

      <h2>Course: {course}</h2>

      <h2>Year: {year}</h2>

      <h2>College: {college()}</h2>

      <p>10 + 20 = {10 + 20}</p>
    </>
  );
}

export default Introduction;