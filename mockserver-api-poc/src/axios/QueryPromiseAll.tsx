import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:3000";

type Employee = {
  id: string;
  name: string;
  role: string;
};

type Product = {
  id: string;
  name: string;
  category: string;
};

type Department = {
  id: string;
  name: string;
};

function QueryPromiseAll() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);

  const [employeeRole, setEmployeeRole] = useState("");
  const [productCategory, setProductCategory] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  async function loadDashboard() {
    try {
      const [
        employeeResponse,
        productResponse,
        departmentResponse,
      ] = await Promise.all([
        axios.get(`${API}/employees`),
        axios.get(`${API}/products`),
        axios.get(`${API}/departments`),
      ]);

      setEmployees(employeeResponse.data);
      setProducts(productResponse.data);
      setDepartments(departmentResponse.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchEmployees() {
    try {
      const response = await axios.get(`${API}/employees`, {
        params: {
          role: employeeRole,
        },
      });

      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function searchProducts() {
    try {
      const response = await axios.get(`${API}/products`, {
        params: {
          category: productCategory,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function resetData() {
    loadDashboard();
    setEmployeeRole("");
    setProductCategory("");
  }

  return (
    <div>
      <h1>Promise.all & Query Params POC</h1>

      <hr />

      <h2>Search Employee By Role</h2>

      <input
        type="text"
        placeholder="Enter Role"
        value={employeeRole}
        onChange={(e) => setEmployeeRole(e.target.value)}
      />

      <button onClick={searchEmployees}>
        Search Employee
      </button>

      <hr />

      <h2>Search Product By Category</h2>

      <input
        type="text"
        placeholder="Enter Category"
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
      />

      <button onClick={searchProducts}>
        Search Product
      </button>

      <hr />

      <button onClick={resetData}>
        Load All Data
      </button>

      <hr />

      <h2>Employees</h2>

      {employees.map((employee) => (
        <div key={employee.id}>
          <p>Name : {employee.name}</p>
          <p>Role : {employee.role}</p>
          <hr />
        </div>
      ))}

      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>Name : {product.name}</p>
          <p>Category : {product.category}</p>
          <hr />
        </div>
      ))}

      <h2>Departments</h2>

      {departments.map((department) => (
        <div key={department.id}>
          <p>Department : {department.name}</p>
        </div>
      ))}
    </div>
  );
}

export default QueryPromiseAll;