import EmployeeSalary from "./EmployeeSalary";

type EmployeeDetailsProps = {
  name: string;
  department: string;
  salary: number;
};

const EmployeeDetails = ({
  name,
  department,
  salary,
}: EmployeeDetailsProps) => {
  return (
    <>
      <h2>Employee Details</h2>

      <p>Name : {name}</p>

      <p>Department : {department}</p>

      <EmployeeSalary salary={salary} />

      <hr />
    </>
  );
};

export default EmployeeDetails;