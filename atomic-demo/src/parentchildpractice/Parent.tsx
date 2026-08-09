import Child from "./Child";

function Parent() {

  const studentName = "Safiya";
  const course = "React with TypeScript";
  const year = "3rd Year";

  return (
    <>
      <h1>College Portal</h1>

      <Child
        studentName={studentName}
        course={course}
        year={year}
      />
    </>
  );
}

export default Parent;