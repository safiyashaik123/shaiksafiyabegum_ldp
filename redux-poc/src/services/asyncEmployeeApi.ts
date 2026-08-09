import axios from "axios";

const API_URL = "http://localhost:3001/employees";

export const getEmployees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addEmployee = async (employee: {
  name: string;
  role: string;
}) => {
  const response = await axios.post(API_URL, employee);
  return response.data;
};

export const updateEmployee = async (employee: {
  id: number;
  name: string;
  role: string;
}) => {
  const response = await axios.put(
    `${API_URL}/${employee.id}`,
    employee
  );
  return response.data;
};

export const deleteEmployee = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};