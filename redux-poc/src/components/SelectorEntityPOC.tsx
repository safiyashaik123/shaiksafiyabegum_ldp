import { useEffect } from "react";
import { Provider } from "react-redux";

import { selectorEntityStore } from "../redux/selectorEntityStore";

import {
  useSelectorEntityDispatch,
  useSelectorEntitySelector,
} from "../redux/selectorHooks";

import {
  fetchEmployees,
  addDemoEmployee,
  promoteJohn,
  removeAlex,
} from "../redux/entity/employeeEntitySlice";

import {
  selectSortedEmployees,
  selectDevelopers,
  selectEmployeeCount,
} from "../redux/selectors/employeeSelectors";

function EmployeeDirectory() {
  const dispatch = useSelectorEntityDispatch();

  const employees =
    useSelectorEntitySelector(selectSortedEmployees);

  const developers =
    useSelectorEntitySelector(selectDevelopers);

  const totalEmployees =
    useSelectorEntitySelector(selectEmployeeCount);

  const loading = useSelectorEntitySelector(
    (state) => state.employeeEntity.loading
  );

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Employee Directory</h1>

      <h3>Total Employees : {totalEmployees}</h3>

      <hr />

      <h2>All Employees</h2>

      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.role}
          </li>
        ))}
      </ul>

      <hr />

      <h2>Developers</h2>

      <ul>
        {developers.map((employee) => (
          <li key={employee.id}>{employee.name}</li>
        ))}
      </ul>

      <hr />

      <button
        onClick={() => dispatch(addDemoEmployee())}
      >
        Add Demo Employee
      </button>

      <button
        onClick={() => dispatch(promoteJohn())}
      >
        Promote John
      </button>

      <button
        onClick={() => dispatch(removeAlex())}
      >
        Remove Alex
      </button>
    </div>
  );
}

export default function SelectorEntityPOC() {
  return (
    <Provider store={selectorEntityStore}>
      <EmployeeDirectory />
    </Provider>
  );
}