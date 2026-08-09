import { useParams } from "react-router-dom";
import { students } from "../data/students";

function StudentDetails() {
  const { id } = useParams();

  const student = students.find(
    (student) => student.id === Number(id)
  );

  if (!student) {
    return (
      <div>
        <h2>Student Not Found</h2>
        <p>No student exists with ID {id}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Student Details</h2>

      <p>ID : {student.id}</p>
      <p>Name : {student.name}</p>
      <p>Department : {student.department}</p>
    </div>
  );
}

export default StudentDetails;