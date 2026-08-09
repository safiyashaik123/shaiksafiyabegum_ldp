type Employee = {
  id: number;
  name: string;
};

type EmployeeListProps = {
  employees: Employee[];
};

function EmployeeList({ employees }: EmployeeListProps) {
  return (
    <ul>
      {employees.map((employee) => (
        <li key={employee.id}>{employee.name}</li>
      ))}
    </ul>
  );
}

export default EmployeeList;