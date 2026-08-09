import type { ReactNode } from "react";

type StudentProps = {
  name: string;
  age: number;
  isPlaced: boolean;
  student: {
    id: number;
    city: string;
  };
  skills: string[];
  company?: string;
  onGreet: (name: string) => void;
  children: ReactNode;
};

function Student({
  name,
  age,
  isPlaced,
  student,
  skills,
  company = "Not Assigned",
  onGreet,
  children,
}: StudentProps) {
  return (
    <div>
      <h2>{name}</h2>

      <p>Age: {age}</p>

      <p>Status: {isPlaced ? "Placed" : "Not Placed"}</p>

      <p>Student Id: {student.id}</p>

      <p>City: {student.city}</p>

      <p>Company: {company}</p>

      <h3>Skills</h3>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button onClick={() => onGreet(name)}>
        Greet Student
      </button>

      <h3>Children</h3>

      {children}
    </div>
  );
}

export default Student;