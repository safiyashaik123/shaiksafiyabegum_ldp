// function Students() {
//   return (
//     <div>
//       <h2>👨‍🎓 Students Page</h2>

//       <p>Student List</p>
//     </div>
//   );
// }

// export default Students;
import { Link, useSearchParams } from "react-router-dom";

import { students } from "../data/students";

function Students() {

  const [searchParams, setSearchParams] = useSearchParams();

  const department =
    searchParams.get("department") || "All";

  const filteredStudents =
    department === "All"
      ? students
      : students.filter(
          (student) =>
            student.department === department
        );

  return (

    <div>

      <h2>Students</h2>

      <br/>

      <label>

        Department :

      </label>

      <select

        value={department}

        onChange={(e)=>

          setSearchParams({

            department:e.target.value

          })

        }

      >

        <option value="All">
          All
        </option>

        <option value="CSE">
          CSE
        </option>

        <option value="ECE">
          ECE
        </option>

      </select>

      <br/><br/>

      {

        filteredStudents.map((student)=>(

          <div key={student.id}>

            <Link
             to={`/student/${student.id}`}
            >

              {student.name}

            </Link>

          </div>

        ))

      }

    </div>

  );

}

export default Students;