import { createSelector } from "@reduxjs/toolkit";
import { employeeAdapter, type Employee } from "../entity/employeeEntitySlice";
import type { SelectorEntityRootState } from "../selectorEntityStore";

const selectEmployeeState = (
  state: SelectorEntityRootState
) => state.employeeEntity;

export const {
  selectAll: selectAllEmployees,
  selectById: selectEmployeeById,
  selectIds: selectEmployeeIds,
  selectEntities: selectEmployeeEntities,
  selectTotal: selectTotalEmployees,
} = employeeAdapter.getSelectors(selectEmployeeState);

export const selectDevelopers = createSelector(
  [selectAllEmployees],
  (employees) =>
    employees.filter(
      (employee: Employee) =>
        employee.role === "Developer"
    )
);

export const selectActiveEmployees = createSelector(
  [selectAllEmployees],
  (employees) =>
    employees.filter(
      (employee: Employee) =>
        employee.active
    )
);

export const selectEmployeeCount = createSelector(
  [selectAllEmployees],
  (employees) => employees.length
);

export const selectSortedEmployees = createSelector(
  [selectAllEmployees],
  (employees) =>
    [...employees].sort(
      (a: Employee, b: Employee) =>
        a.name.localeCompare(b.name)
    )
);