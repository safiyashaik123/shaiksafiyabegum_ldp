import { useDispatch, useSelector } from "react-redux";
import { deleteEmployee } from "../redux/slices/employeeSlice";
import {type RootState } from "../redux/store";

type Employee = {
  id: number;
  name: string;
  role: string;
};

type EmployeeListProps = {
  onEdit: (employee: Employee) => void;
};

function EmployeeList({ onEdit }: EmployeeListProps) {
  const dispatch = useDispatch();

  const employees = useSelector(
    (state: RootState) => state.employee.employees
  );

  return (
    <div>
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No Employees Added</p>
      ) : (
        employees.map((employee) => (
          <div key={employee.id}>
            <p>
              <strong>{employee.name}</strong> - {employee.role}
            </p>

            <button
              onClick={() => onEdit(employee)}
            >
              Edit
            </button>

            <button
              onClick={() =>
                dispatch(deleteEmployee(employee.id))
              }
            >
              Delete
            </button>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default EmployeeList;