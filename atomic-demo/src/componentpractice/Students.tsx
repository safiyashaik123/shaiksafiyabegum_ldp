import { useEffect, useState } from "react";

type StudentProps = {
  studentName: string;
  course: string;
};

function Student({ studentName, course }: StudentProps) {

  console.log("1. Student Function Executed");

  const [attendance, setAttendance] = useState<number>(0);

  // Mount
  useEffect(() => {
    console.log("3. Component Mounted");
    console.log("Fetching Student Details...");

    return () => {
      console.log("6. Component Removed");
      console.log("Saving Student Data...");
    };
  }, []);

  // Update
  useEffect(() => {
    if (attendance !== 0) {
      console.log("5. Attendance Updated");
    }
  }, [attendance]);

  const markAttendance = () => {
    setAttendance(attendance + 1);
  };

  console.log("2. JSX Returned");

  return (
    <>
      <h1>Student Portal</h1>

      <h2>Name : {studentName}</h2>

      <h2>Course : {course}</h2>

      <h2>Attendance : {attendance}</h2>

      <button onClick={markAttendance}>
        Mark Attendance
      </button>
    </>
  );
}

export default Student;