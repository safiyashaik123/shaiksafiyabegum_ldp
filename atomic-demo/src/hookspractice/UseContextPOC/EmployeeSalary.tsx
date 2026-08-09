import { useContext } from "react";
import { EmployeeContext } from "../hooks/EmployeeContext";

function EmployeeSalary() {
  const { employee, setEmployee } = useContext(EmployeeContext);

  const increaseSalary = () => {
    setEmployee((previousEmployee) => ({
      ...previousEmployee,
      salary: "₹75,000",
    }));
  };

  return (
    <>
      <h2>Employee Salary Component</h2>

      <p>Salary : {employee.salary}</p>

      <button onClick={increaseSalary}>
        Increase Salary
      </button>
    </>
  );
}

export default EmployeeSalary;