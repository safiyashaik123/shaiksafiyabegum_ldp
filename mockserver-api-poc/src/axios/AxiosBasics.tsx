import { useEffect, useState } from "react";
import axios from "axios";

type Employee = {
  id: string;
  name: string;
  role: string;
};

function AxiosBasics() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    try {
      const response = await axios.get(
        "http://localhost:3000/employees"
      );

      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Axios Basics</h1>

      {employees.map((employee) => (
        <div key={employee.id}>
          {employee.name} - {employee.role}
        </div>
      ))}
    </div>
  );
}

export default AxiosBasics;