import { useState } from "react";

function StudentList() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState<string[]>([]);

  const handleAddStudent = () => {
    if (studentName === "") return;

    setStudents([...students, studentName]);
    setStudentName("");
  };

  return (
    <>
      <h2>Student List</h2>

      <input
        type="text"
        placeholder="Enter Student Name"
        value={studentName}
        onChange={(event) => setStudentName(event.target.value)}
      />

      <button onClick={handleAddStudent}>
        Add Student
      </button>

      <h3>Students</h3>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </>
  );
}

export default StudentList;