import EmployeeCard from "./EmployeeCard";

function EmployeeList() {
  const employees = [
    {
      id: 1,
      name: "Safiya",
      department: "Frontend",
    },
    {
      id: 2,
      name: "Rahul",
      department: "Backend",
    },
    {
      id: 3,
      name: "John",
      department: "Testing",
    },
  ];

  return (
    <>
      <h1>Employee List</h1>

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          name={employee.name}
          department={employee.department}
        />
      ))}
    </>
  );
}

export default EmployeeList;
