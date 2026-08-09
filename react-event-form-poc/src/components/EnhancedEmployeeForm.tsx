import { useEffect, useRef, useState } from "react";

const EnhancedEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    gender: "",
    address: "",
    accepted: false,
  });

  const [submittedEmployee, setSubmittedEmployee] =
    useState<typeof employee | null>(null);

  
  const nameInputRef = useRef<HTMLInputElement>(null);


  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  // Update browser tab title
  useEffect(() => {
    if (employee.name) {
      document.title = `Editing: ${employee.name}`;
    } else {
      document.title = "Employee Form";
    }
  }, [employee.name]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setEmployee({
      ...employee,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    });
  };

  const handleReset = () => {
    setEmployee({
      name: "",
      email: "",
      department: "",
      gender: "",
      address: "",
      accepted: false,
    });

    // Focus Name input after reset
    nameInputRef.current?.focus();
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !employee.name ||
      !employee.email ||
      !employee.department
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (!employee.accepted) {
      alert("Please accept the terms");
      return;
    }

    setSubmittedEmployee(employee);

    handleReset();
  };

  return (
    <>
      <h2>Enhanced Employee Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <p>
          Name
          <br />
          <input
            ref={nameInputRef}
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
          />
        </p>

        <p>
          Email
          <br />
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
          />
        </p>

        <p>
          Department
          <br />
          <select
            name="department"
            value={employee.department}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Node">Node</option>
          </select>
        </p>

        <p>
          Gender
          <br />

          <input
            type="radio"
            name="gender"
            value="Male"
            checked={employee.gender === "Male"}
            onChange={handleChange}
          />
          Male

          {"  "}

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={employee.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </p>

        <p>
          Address
          <br />

          <textarea
            name="address"
            value={employee.address}
            onChange={handleChange}
          />
        </p>

        <p>
          <input
            type="checkbox"
            name="accepted"
            checked={employee.accepted}
            onChange={handleChange}
          />

          Accept Terms & Conditions
        </p>

        <button type="submit">Submit</button>

        {" "}

        <button
          type="button"
          onClick={handleReset}
        >
          Reset
        </button>
      </form>

      <hr />

      <h3>Submitted Details</h3>

      {submittedEmployee ? (
        <>
          <p>Name : {submittedEmployee.name}</p>
          <p>Email : {submittedEmployee.email}</p>
          <p>Department : {submittedEmployee.department}</p>
          <p>Gender : {submittedEmployee.gender}</p>
          <p>Address : {submittedEmployee.address}</p>
        </>
      ) : (
        <p>No Data Submitted</p>
      )}
    </>
  );
};

export default EnhancedEmployeeForm;