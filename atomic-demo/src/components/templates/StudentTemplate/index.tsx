import StudentForm from "../../organisms/StudentForm";
import StudentList from "../../organisms/StudentList";

import "./StudentTemplate.css";

function StudentTemplate() {
  return (
    <div className="student-template">

      <StudentForm />

      <StudentList />

    </div>
  );
}

export default StudentTemplate;