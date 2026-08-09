import { useState } from "react";
import { Provider } from "react-redux";

import { queryStore } from "../redux/queryStore";

import {
  useGetEmployeesQuery,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
  type Employee,
} from "../services/employeeApi";

function EmployeeManager() {
  const { data: employees = [], isLoading, error } =
    useGetEmployeesQuery();

  const [addEmployee] = useAddEmployeeMutation();
  const [updateEmployee] = useUpdateEmployeeMutation();
  const [deleteEmployee] = useDeleteEmployeeMutation();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const [editingEmployee, setEditingEmployee] =
    useState<Employee | null>(null);

  const handleSubmit = async () => {
    if (!name.trim() || !role.trim()) return;

    if (editingEmployee) {
      await updateEmployee({
        ...editingEmployee,
        name,
        role,
      });

      setEditingEmployee(null);
    } else {
      await addEmployee({
        name,
        role,
      });
    }

    setName("");
    setRole("");
  };

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setName(employee.name);
    setRole(employee.role);
  };

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>Error Loading Employees</h2>;

  return (
    <div>
      <h1>RTK Query CRUD</h1>

      <input
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Employee Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        {editingEmployee
          ? "Update Employee"
          : "Add Employee"}
      </button>

      <hr />

      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.role}

            <button
              onClick={() => handleEdit(employee)}
            >
              Edit
            </button>

            <button
              onClick={() =>
                deleteEmployee(employee.id)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RTKQueryPOC() {
  return (
    <Provider store={queryStore}>
      <EmployeeManager />
    </Provider>
  );
}