import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

type Employee = {
  id: number;
  name: string;
  role: string;
};

type EmployeeState = {
  employees: Employee[];
};

const initialState: EmployeeState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: "employee",

  initialState,

  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },

    updateEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees = state.employees.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee
      );
    },

    deleteEmployee: (state, action: PayloadAction<number>) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload
      );
    },
  },
});

export const {
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;