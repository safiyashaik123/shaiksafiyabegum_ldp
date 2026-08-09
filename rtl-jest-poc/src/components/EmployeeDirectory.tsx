import { useEffect, useState } from "react";
import { fetchEmployees } from "../services/employeeApi";
import type { Employee } from "../services/employeeApi";

function EmployeeDirectory() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEmployees() {
      try {
        const data = await fetchEmployees();
        //const data = await fetchEmployees("developers");
        setEmployees(data);
      } catch {
        setError("Failed to load employees");
      } finally {
        setLoading(false);
      }
    }

    loadEmployees();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>{employee.name}</li>
      ))}
    </ul>
  );
}

export default EmployeeDirectory;
