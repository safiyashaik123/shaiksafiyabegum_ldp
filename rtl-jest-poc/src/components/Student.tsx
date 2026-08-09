import { getStudentName } from "../services/studentService";

type StudentProps = {
  id: number;
};

function Student({ id }: StudentProps) {

  const name = getStudentName(id);

  return (
    <div>
      <h2>Student Details</h2>

      <p>{name}</p>

      <p>Random : {Math.random()}</p>
    </div>
  );
}

export default Student;