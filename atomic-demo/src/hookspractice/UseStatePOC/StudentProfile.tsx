import { useState } from "react";

function StudentProfile() {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  return (
    <>
      <h2>Student Profile</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={student.name}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={student.age}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={student.course}
        onChange={handleChange}
      />

      <hr />

      <h3>Student Details</h3>

      <p>Name : {student.name}</p>
      <p>Age : {student.age}</p>
      <p>Course : {student.course}</p>
    </>
  );
}

export default StudentProfile;