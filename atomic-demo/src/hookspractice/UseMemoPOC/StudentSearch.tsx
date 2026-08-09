import { useMemo, useState } from "react";

function StudentSearch() {
  const students = [
    "Safiya",
    "Rahul",
    "Priya",
    "Suresh",
    "Anjali",
    "Ravi",
    "Kiran",
    "Sneha",
    "Akash",
    "Sai",
  ];

  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  // ------------------------------------
  // BEFORE (Without useMemo)
  // ------------------------------------

//   console.log("Filtering Students...");
  
//   const filteredStudents = students.filter((student) =>
//     student.toLowerCase().includes(search.toLowerCase())
//   );

  // ------------------------------------
  // AFTER (With useMemo)
  // ------------------------------------

  const filteredStudents = useMemo(() => {
    console.log("Filtering Students...");

    return students.filter((student) =>
      student.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <>
      <h2>Student Search</h2>

      <input
        type="text"
        placeholder="Search Student"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <br />
      <br />

      <button onClick={() => setCount(count + 1)}>
        Count : {count}
      </button>

      <h3>Students</h3>

      {filteredStudents.map((student) => (
        <p key={student}>{student}</p>
      ))}
    </>
  );
}

export default StudentSearch;