import { Link, Outlet } from "react-router-dom";
import { employees } from "../data/employees";

function EmployeeList() {
  return (
    <div>
      <h2>Employees</h2>

      {employees.map((employee) => (
        <div key={employee.id}>
          <Link to={`${employee.id}`}>
            {employee.name}
          </Link>
        </div>
      ))}

      <hr />

      <Outlet />
    </div>
  );
}

export default EmployeeList;