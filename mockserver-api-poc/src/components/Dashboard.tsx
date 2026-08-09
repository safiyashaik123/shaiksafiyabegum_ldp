import { useEffect, useState } from "react";

type Employee = {
  id: string;
  name: string;
  role: string;
};

type Product = {
  id: number;
  name: string;
  category: string;
};

type Department = {
  id: number;
  name: string;
};

function Dashboard() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  async function fetchDashboardData() {
    try {
      const [employeesResponse, productsResponse, departmentsResponse] =
        await Promise.all([
          fetch("http://localhost:3000/employees"),
          fetch("http://localhost:3000/products"),
          fetch("http://localhost:3000/departments"),
        ]);

      const employeesData = await employeesResponse.json();
      const productsData = await productsResponse.json();
      const departmentsData = await departmentsResponse.json();

      setEmployees(employeesData);
      setProducts(productsData);
      setDepartments(departmentsData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <hr />

      <h2>Employees</h2>

      {employees.map((employee) => (
        <div key={employee.id}>
          {employee.name} - {employee.role}
        </div>
      ))}

      <hr />

      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          {product.name} - {product.category}
        </div>
      ))}

      <hr />

      <h2>Departments</h2>

      {departments.map((department) => (
        <div key={department.id}>{department.name}</div>
      ))}
    </div>
  );
}

export default Dashboard;