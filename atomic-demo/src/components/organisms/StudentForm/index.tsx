import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";

import SearchBar from "../../molecules/SearchBar";
import StudentField from "../../molecules/StudentField";

import "./StudentForm.css";

function StudentForm() {
  return (
    <div className="student-form">

      <Heading title="Student Management" />

      <SearchBar
        placeholder="Search Student"
        buttonTitle="Search"
      />

      <StudentField
        label="Student Name"
        type="text"
        placeholder="Enter Student Name"
      />

      <StudentField
        label="Email"
        type="email"
        placeholder="Enter Email"
      />

      <StudentField
        label="Course"
        type="text"
        placeholder="Enter Course"
      />

      <Button title="Add Student" />

    </div>
  );
}

export default StudentForm;