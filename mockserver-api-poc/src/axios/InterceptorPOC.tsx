import { useState } from "react";
import api from "../services/api";

type Employee = {
  id: string;
  name: string;
  role: string;
};

function InterceptorPOC() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  async function loadEmployees() {
    try {
      const response = await api.get<Employee[]>("/employees");

      setEmployees(response.data);
    } catch (error) {
      console.log("Component Error :", error);
    }
  }

  return (
    <div>
      <h2>Axios Interceptor POC</h2>

      <button onClick={loadEmployees}>
        Load Employees
      </button>

      <hr />

      {employees.map((employee) => (
        <div key={employee.id}>
          <p>Name : {employee.name}</p>
          <p>Role : {employee.role}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default InterceptorPOC;