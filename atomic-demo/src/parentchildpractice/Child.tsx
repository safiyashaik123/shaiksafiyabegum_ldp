type StudentProps = {
  studentName: string;
  course: string;
  year: string;
};

function Child({
  studentName,
  course,
  year,
}: StudentProps) {
  return (
    <>
      <h2>Student Details</h2>

      <p>Name : {studentName}</p>

      <p>Course : {course}</p>

      <p>Year : {year}</p>
    </>
  );
}

export default Child;