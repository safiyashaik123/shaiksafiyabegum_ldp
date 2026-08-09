import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { getEmployees } from "../../services/asyncEmployeeApi";

export type Employee = {
  id: number;
  name: string;
  role: string;
  active: boolean;
};

const employeeAdapter = createEntityAdapter<Employee>();

const initialState = employeeAdapter.getInitialState({
  loading: false,
  error: null as string | null,
});

export const fetchEmployees = createAsyncThunk(
  "employeeEntity/fetchEmployees",
  async () => {
    const employees = await getEmployees();

    return employees.map((employee: Omit<Employee, "active">) => ({
  ...employee,
  active: true,
}));
  }
);

const employeeEntitySlice = createSlice({
  name: "employeeEntity",

  initialState,

  reducers: {
    addDemoEmployee(state) {
      employeeAdapter.addOne(state, {
        id: Date.now(),
        name: "Demo Employee",
        role: "Developer",
        active: true,
      });
    },

    promoteJohn(state) {
      const john = Object.values(state.entities).find(
        (employee) => employee?.name === "John"
      );

      if (john) {
        employeeAdapter.updateOne(state, {
          id: john.id,
          changes: {
            role: "Senior Developer",
          },
        });
      }
    },

    removeAlex(state) {
      const alex = Object.values(state.entities).find(
        (employee) => employee?.name === "Alex"
      );

      if (alex) {
        employeeAdapter.removeOne(state, alex.id);
      }
    },
  },

  extraReducers: (builder) => {
    builder

      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;

        employeeAdapter.setAll(state, action.payload);
      })

      .addCase(fetchEmployees.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch employees";
      });
  },
});

export const {
  addDemoEmployee,
  promoteJohn,
  removeAlex,
} = employeeEntitySlice.actions;

export default employeeEntitySlice.reducer;

export { employeeAdapter };