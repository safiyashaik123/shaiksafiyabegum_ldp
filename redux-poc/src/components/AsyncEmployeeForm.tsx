import { useEffect, useState } from "react";

import {
  createEmployee,
  editEmployee,
} from "../redux/slices/asyncEmployeeSlice";

import type { Employee } from "../redux/slices/asyncEmployeeSlice";

import { useAppDispatch } from "../redux/asyncHooks";

type Props = {
  editingEmployee: Employee | null;
  clearEditing: () => void;
};

function AsyncEmployeeForm({
  editingEmployee,
  clearEditing,
}: Props) {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (editingEmployee) {
      setName(editingEmployee.name);
      setRole(editingEmployee.role);
    } else {
      setName("");
      setRole("");
    }
  }, [editingEmployee]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !role.trim()) return;

    if (editingEmployee) {
      dispatch(
        editEmployee({
          id: editingEmployee.id,
          name,
          role,
        })
      );

      clearEditing();
    } else {
      dispatch(
        createEmployee({
          name,
          role,
        })
      );
    }

    setName("");
    setRole("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        {editingEmployee ? "Edit Employee" : "Add Employee"}
      </h2>

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

      <button type="submit">
        {editingEmployee ? "Update Employee" : "Add Employee"}
      </button>
    </form>
  );
}

export default AsyncEmployeeForm;