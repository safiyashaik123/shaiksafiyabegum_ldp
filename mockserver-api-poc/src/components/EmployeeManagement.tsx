import { useEffect, useState } from "react";

type Employee = {
  id: number;
  name: string;
  role: string;
};

function EmployeeManagement() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  async function fetchEmployees() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("http://localhost:3000/employees");

      if (!response.ok) {
        throw new Error("Failed to fetch employees");
      }

      const data = await response.json();

      setEmployees(data);
    } catch (error) {
      setError("Unable to fetch employees");
    } finally {
      setLoading(false);
    }
  }

  async function addEmployee(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newEmployee = {
      name,
      role,
    };

    try {
      const response = await fetch("http://localhost:3000/employees", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(newEmployee),
      });

      if (!response.ok) {
        throw new Error("Failed to add employee");
      }

      clearForm();
      fetchEmployees();
    } catch (error) {
      setError("Unable to add employee");
    }
  }

  function startEdit(employee: Employee) {
    setEditingId(employee.id);
    setName(employee.name);
    setRole(employee.role);
  }

  async function updateEmployee(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (editingId === null) return;

    const updatedEmployee = {
      id: editingId,
      name,
      role,
    };

    try {
      const response = await fetch(
        `http://localhost:3000/employees/${editingId}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(updatedEmployee),
        }
      );

      if (!response.ok) {
        throw new Error("Failed");
      }

      setEditingId(null);
      clearForm();
      fetchEmployees();
    } catch (error) {
      setError("Unable to update employee");
    }
  }

  async function updateRole(id: number) {
    const newRole = prompt("Enter New Role");

    if (!newRole) return;

    try {
      const response = await fetch(
        `http://localhost:3000/employees/${id}`,
        {
          method: "PATCH",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            role: newRole,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed");
      }

      fetchEmployees();
    } catch (error) {
      setError("Unable to update role");
    }
  }

  async function deleteEmployee(id: number) {
    try {
      const response = await fetch(
        `http://localhost:3000/employees/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed");
      }

      fetchEmployees();
    } catch (error) {
      setError("Unable to delete employee");
    }
  }

  function clearForm() {
    setName("");
    setRole("");
  }

  return (
    <div>
      <h1>Employee Management</h1>

      <form onSubmit={editingId ? updateEmployee : addEmployee}>
        <div>
          <label>Name</label>
          <br />

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Role</label>
          <br />

          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          {editingId ? "Update Employee" : "Add Employee"}
        </button>
      </form>

      <hr />

      {loading && <h3>Loading...</h3>}

      {error && <h3>{error}</h3>}

      {!loading &&
        employees.map((employee) => (
          <div key={employee.id}>
            <h3>{employee.name}</h3>

            <p>{employee.role}</p>

            <button onClick={() => startEdit(employee)}>
              PUT
            </button>

            <button onClick={() => updateRole(employee.id)}>
              PATCH
            </button>

            <button onClick={() => deleteEmployee(employee.id)}>
              DELETE
            </button>

            <hr />
          </div>
        ))}
    </div>
  );
}

export default EmployeeManagement;