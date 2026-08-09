import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "../../services/asyncEmployeeApi";

export type Employee = {
  id: number;
  name: string;
  role: string;
};

type EmployeeState = {
  employees: Employee[];
  loading: boolean;
  error: string | null;
};

const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: null,
};

export const fetchEmployees = createAsyncThunk(
  "asyncEmployee/fetchEmployees",
  async () => {
    return await getEmployees();
  }
);

export const createEmployee = createAsyncThunk(
  "asyncEmployee/createEmployee",
  async (employee: { name: string; role: string }) => {
    return await addEmployee(employee);
  }
);

export const editEmployee = createAsyncThunk(
  "asyncEmployee/editEmployee",
  async (employee: Employee) => {
    return await updateEmployee(employee);
  }
);

export const removeEmployee = createAsyncThunk(
  "asyncEmployee/removeEmployee",
  async (id: number) => {
    await deleteEmployee(id);
    return id;
  }
);

const asyncEmployeeSlice = createSlice({
  name: "asyncEmployee",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })

      .addCase(fetchEmployees.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch employees";
      })

      .addCase(createEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      })

      .addCase(editEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.map((employee) =>
          employee.id === action.payload.id
            ? action.payload
            : employee
        );
      })

      .addCase(removeEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter(
          (employee) => employee.id !== action.payload
        );
      });
  },
});

export default asyncEmployeeSlice.reducer;