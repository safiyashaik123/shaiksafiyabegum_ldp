import { useForm } from "react-hook-form";

type EmployeeFormData = {
  name: string;
  email: string;
  department: string;
  terms: boolean;
};

const EmployeeHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<EmployeeFormData>({
    defaultValues: {
      name: "",
      email: "",
      department: "IT",
      terms: false,
    },
  });

  const liveName = watch("name");

  const onSubmit = (data: EmployeeFormData) => {
    alert("Employee Registered Successfully!");

    console.log("Submitted Data:", data);

    reset();
  };

  const handleFillDemo = () => {
    setValue("name", "John Doe");
    setValue("email", "john@gmail.com");
    setValue("department", "HR");
    setValue("terms", true);
  };

  const handleShowData = () => {
    console.log(getValues());
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "20px auto",
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>Employee Registration (React Hook Form)</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}

        <div style={{ marginBottom: "15px" }}>
          <label>Name</label>

          <br />

          <input
            type="text"
            placeholder="Enter Name"
            {...register("name", {
              required: "Name is required",
            })}
          />

          <br />

          {errors.name && (
            <span style={{ color: "red" }}>
              {errors.name.message}
            </span>
          )}
        </div>

        {/* Live Preview */}

        <p>
          <strong>Live Preview :</strong> {liveName}
        </p>

        {/* Email */}

        <div style={{ marginBottom: "15px" }}>
          <label>Email</label>

          <br />

          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", {
              required: "Email is required",
            })}
          />

          <br />

          {errors.email && (
            <span style={{ color: "red" }}>
              {errors.email.message}
            </span>
          )}
        </div>

        {/* Department */}

        <div style={{ marginBottom: "15px" }}>
          <label>Department</label>

          <br />

          <select {...register("department")}>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Testing">Testing</option>
          </select>
        </div>

        {/* Terms */}

        <div style={{ marginBottom: "15px" }}>
          <label>
            <input
              type="checkbox"
              {...register("terms", {
                required: "Please accept the terms",
              })}
            />{" "}
            Accept Terms
          </label>

          <br />

          {errors.terms && (
            <span style={{ color: "red" }}>
              {errors.terms.message}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleFillDemo}
        >
          Fill Demo Data
        </button>

        {" "}

        <button
          type="button"
          onClick={handleShowData}
        >
          Show Current Data
        </button>

        <br />
        <br />

        <button type="submit">
          Submit
        </button>

        {" "}

        <button
          type="button"
          onClick={() => reset()}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default EmployeeHookForm;