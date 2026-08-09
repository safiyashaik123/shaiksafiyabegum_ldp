import { useContext } from "react";
import { EmployeeContext } from "../hooks/EmployeeContext";
import EmployeeSalary from "./EmployeeSalary";

function EmployeeDetails() {
  const { employee } = useContext(EmployeeContext);

  return (
    <>
      <h2>Employee Details Component</h2>

      <p>Department : {employee.department}</p>

      <EmployeeSalary />
    </>
  );
}

export default EmployeeDetails;