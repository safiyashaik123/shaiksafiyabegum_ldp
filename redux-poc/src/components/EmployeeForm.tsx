import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addEmployee,
  updateEmployee,
} from "../redux/slices/employeeSlice";

type Employee = {
  id: number;
  name: string;
  role: string;
};

type EmployeeFormProps = {
  editingEmployee: Employee | null;
  clearEditing: () => void;
};

function EmployeeForm({
  editingEmployee,
  clearEditing,
}: EmployeeFormProps) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (editingEmployee) {
      setName(editingEmployee.name);
      setRole(editingEmployee.role);
    }
  }, [editingEmployee]);

  function clearForm() {
    setName("");
    setRole("");
    clearEditing();
  }

  function handleSubmit() {
    if (!name || !role) return;

    if (editingEmployee) {
      dispatch(
        updateEmployee({
          id: editingEmployee.id,
          name,
          role,
        })
      );
    } else {
      dispatch(
        addEmployee({
          id: Date.now(),
          name,
          role,
        })
      );
    }

    clearForm();
  }

  return (
    <div>
      <h2>Employee Form</h2>

      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Employee Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleSubmit}>
        {editingEmployee ? "Update Employee" : "Add Employee"}
      </button>

      {editingEmployee && (
        <button onClick={clearForm}>
          Cancel
        </button>
      )}
    </div>
  );
}

export default EmployeeForm;