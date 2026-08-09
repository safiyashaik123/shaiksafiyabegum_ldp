import { useContext } from "react";
import { EmployeeContext } from "../hooks/EmployeeContext";
import EmployeeDetails from "./EmployeeDetails";

function Employee() {
  const { employee } = useContext(EmployeeContext);

  return (
    <>
      <h2>Employee Component</h2>

      <p>Name : {employee.name}</p>

      <EmployeeDetails />
    </>
  );
}

export default Employee;