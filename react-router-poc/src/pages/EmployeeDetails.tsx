import { useParams } from "react-router-dom";
import { employees } from "../data/employees";

function EmployeeDetails() {
  const { id } = useParams();

  const employee = employees.find(
    (employee) => employee.id === Number(id)
  );

  if (!employee) {
    return <h3>Employee Not Found</h3>;
  }

  return (
    <div>
      <h2>Employee Details</h2>

      <p>ID : {employee.id}</p>
      <p>Name : {employee.name}</p>
      <p>Role : {employee.role}</p>
    </div>
  );
}

export default EmployeeDetails;