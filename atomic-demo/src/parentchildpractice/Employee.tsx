import EmployeeDetails from "./EmployeeDetails";

const Employee = () => {
  return (
    <>
      <h1>Employee Management</h1>

      <EmployeeDetails
        name="Safiya"
        department="Frontend"
        salary={35000}
      />

      <EmployeeDetails
        name="Rahul"
        department="Backend"
        salary={42000}
      />

      <EmployeeDetails
        name="John"
        department="Testing"
        salary={30000}
      />
    </>
  );
};

export default Employee;