import { useEffect, useState } from "react";
import axios from "axios";

type Employee = {
  id: string;
  name: string;
  role: string;
};

const API_URL = "http://localhost:3000/employees";

function AxiosCRUD() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const [selectedId, setSelectedId] = useState("");

  const [mode, setMode] = useState<"POST" | "PUT" | "PATCH">("POST");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getEmployees();
  }, []);

  async function getEmployees() {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(API_URL);
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch employees");
    } finally {
      setLoading(false);
    }
  }

  async function addEmployee() {
    if (!name.trim() || !role.trim()) {
      alert("Enter Name and Role");
      return;
    }

    try {
      await axios.post(API_URL, {
        name,
        role,
      });

      clearForm();
      getEmployees();
    } catch (error) {
      console.log(error);
    }
  }

  function selectForPut(employee: Employee) {
    setMode("PUT");
    setSelectedId(employee.id);
    setName(employee.name);
    setRole(employee.role);
  }

  async function updateEmployee() {
    if (!selectedId) return;

    try {
      await axios.put(`${API_URL}/${selectedId}`, {
        id: selectedId,
        name,
        role,
      });

      clearForm();
      getEmployees();
    } catch (error) {
      console.log(error);
    }
  }

  function selectForPatch(employee: Employee) {
    setMode("PATCH");
    setSelectedId(employee.id);

    setName("");
    setRole(employee.role);
  }

  async function patchEmployee() {
    if (!selectedId) return;

    try {
      await axios.patch(`${API_URL}/${selectedId}`, {
        role,
      });

      clearForm();
      getEmployees();
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteEmployee(id: string) {
    try {
      await axios.delete(`${API_URL}/${id}`);
      getEmployees();
    } catch (error) {
      console.log(error);
    }
  }

  function clearForm() {
    setName("");
    setRole("");
    setSelectedId("");
    setMode("POST");
  }

  return (
    <div>
      <h1>Axios CRUD</h1>

      <div>
        <label>Name</label>
        <br />

        <input
          type="text"
          value={name}
          placeholder="Employee Name"
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />

        <label>Role</label>

        <br />

        <input
          type="text"
          value={role}
          placeholder="Employee Role"
          onChange={(e) => setRole(e.target.value)}
        />

        <br />
        <br />

        {mode === "POST" && (
          <button onClick={addEmployee}>
            Add Employee
          </button>
        )}

        {mode === "PUT" && (
          <button onClick={updateEmployee}>
            Update Employee (PUT)
          </button>
        )}

        {mode === "PATCH" && (
          <button onClick={patchEmployee}>
            Update Role (PATCH)
          </button>
        )}
      </div>

      <hr />

      {loading && <h3>Loading...</h3>}

      {error && <h3>{error}</h3>}

      {!loading &&
        employees.map((employee) => (
          <div key={employee.id}>
            <h2>{employee.name}</h2>

            <h3>{employee.role}</h3>

            <button
              onClick={() => selectForPut(employee)}
            >
              PUT
            </button>

            <button
              onClick={() => selectForPatch(employee)}
            >
              PATCH
            </button>

            <button
              onClick={() =>
                deleteEmployee(employee.id)
              }
            >
              DELETE
            </button>

            <hr />
          </div>
        ))}
    </div>
  );
}

export default AxiosCRUD;