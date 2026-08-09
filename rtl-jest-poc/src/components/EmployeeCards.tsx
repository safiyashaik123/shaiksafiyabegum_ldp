import { useState } from "react";
import { getEmployees } from "../services/employeeService";
import type { Employee } from "../services/employeeService";

function EmployeeCards() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [error, setError] = useState("");

  async function loadEmployees() {
    try {
      const data = await getEmployees();
      setEmployees(data);
      setError("");
    } catch {
      setError("Failed to load employees");
    }
  }

  return (
    <div>
      <button onClick={loadEmployees}>
        Load Employees
      </button>

      {error && <h2>{error}</h2>}

      {employees.map((employee) => (
        <div
          key={employee.id}
          data-testid="employee-card"
        >
          <h3>{employee.name}</h3>

          <p>{employee.role}</p>

          <button>View</button>
        </div>
      ))}
    </div>
  );
}

export default EmployeeCards;