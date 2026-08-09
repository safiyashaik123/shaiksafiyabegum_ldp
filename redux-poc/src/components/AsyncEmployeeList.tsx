import { useEffect, useState } from "react";
import {
  fetchEmployees,
  removeEmployee,
} from "../redux/slices/asyncEmployeeSlice";
import type { Employee } from "../redux/slices/asyncEmployeeSlice";

import { useAppDispatch, useAppSelector } from "../redux/asyncHooks";
import AsyncEmployeeForm from "./AsyncEmployeeForm";

function AsyncEmployeeList() {
  
  const dispatch = useAppDispatch();

  const { employees, loading, error } = useAppSelector(
    (state) => state.asyncEmployee
  );

  const [editingEmployee, setEditingEmployee] =
    useState<Employee | null>(null);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleDelete = (id: number) => {
    dispatch(removeEmployee(id));
  };

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <AsyncEmployeeForm
        editingEmployee={editingEmployee}
        clearEditing={() => setEditingEmployee(null)}
      />

      <h2>Employee List</h2>

      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.role}

            <button
              onClick={() => setEditingEmployee(employee)}
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(employee.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AsyncEmployeeList;