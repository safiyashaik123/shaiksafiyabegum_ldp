type EmployeeSalaryProps = {
  salary: number;
};

const EmployeeSalary = ({ salary }: EmployeeSalaryProps) => {
  return (
    <>
      <h3>Salary : ₹{salary}</h3>
    </>
  );
};

export default EmployeeSalary;