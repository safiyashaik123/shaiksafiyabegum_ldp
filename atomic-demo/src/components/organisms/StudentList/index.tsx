import Heading from "../../atoms/Heading";
import "./StudentList.css";

function StudentList() {
  return (
    <div className="student-list">

      <Heading title="Student List" />

      <div className="student-card">
        <h3>Safiya</h3>
        <p>Email : safiya@gmail.com</p>
        <p>Course : AI & DS</p>
      </div>

      <div className="student-card">
        <h3>Ayesha</h3>
        <p>Email : ayesha@gmail.com</p>
        <p>Course : CSE</p>
      </div>

    </div>
  );
}

export default StudentList;