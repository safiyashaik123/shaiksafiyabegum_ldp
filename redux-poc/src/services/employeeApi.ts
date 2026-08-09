import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Employee = {
  id: number;
  name: string;
  role: string;
};

export const employeeApi = createApi({
  reducerPath: "employeeApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),

  tagTypes: ["Employee"],

  endpoints: (builder) => ({
    getEmployees: builder.query<Employee[], void>({
      query: () => "employees",

      providesTags: ["Employee"],
    }),

    addEmployee: builder.mutation<
      Employee,
      Omit<Employee, "id">
    >({
      query: (employee) => ({
        url: "employees",
        method: "POST",
        body: employee,
      }),

      invalidatesTags: ["Employee"],
    }),

    updateEmployee: builder.mutation<
      Employee,
      Employee
    >({
      query: (employee) => ({
        url: `employees/${employee.id}`,
        method: "PUT",
        body: employee,
      }),

      invalidatesTags: ["Employee"],
    }),

    deleteEmployee: builder.mutation<
      void,
      number
    >({
      query: (id) => ({
        url: `employees/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Employee"],
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useAddEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;