import { useRef, useState } from "react";
import axios from "axios";
import advancedApi from "../services/advancedApi";

type Employee = {
  id: string;
  name: string;
  role: string;
};

function AdvancedAxios() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(false);

  const controllerRef = useRef<AbortController | null>(null);

  async function loadEmployees() {
    controllerRef.current = new AbortController();

    try {
      setLoading(true);

      const response = await advancedApi.get<Employee[]>("/employees", {
        signal: controllerRef.current.signal,
      });

      setEmployees(response.data);

      console.log("Employees Loaded Successfully");
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request Cancelled");
      } else if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          console.log("Request Timed Out");
        } else {
          console.log("Axios Error :", error.message);
        }
      } else {
        console.log("Unknown Error");
      }
    } finally {
      setLoading(false);
    }
  }

  function cancelRequest() {
    controllerRef.current?.abort();
  }

  return (
    <div>
      <h2>Advanced Axios POC</h2>

      <button onClick={loadEmployees}>
        Load Employees
      </button>

      <button
        onClick={cancelRequest}
        style={{ marginLeft: "10px" }}
      >
        Cancel Request
      </button>

      <hr />

      {loading && <p>Loading...</p>}

      {employees.map((employee) => (
        <div key={employee.id}>
          <p>Name : {employee.name}</p>
          <p>Role : {employee.role}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default AdvancedAxios;