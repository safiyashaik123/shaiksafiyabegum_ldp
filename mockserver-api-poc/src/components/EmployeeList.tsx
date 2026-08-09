import { useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";

type Employee = {
  id: string;
  name: string;
  role: string;
};

function EmployeeList() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  async function loadEmployees() {
    try {
      const data = await getEmployees();

      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Employees</h1>

      {employees.map((employee) => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.role}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;