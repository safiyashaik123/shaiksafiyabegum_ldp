import { useForm } from "react-hook-form";

type FormData = {
  employeeName: string;
  age: number;
};

const CustomValidationPOC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Employee Registered Successfully");
  };

  return (
    <div style={{ width: "350px", margin: "20px auto" }}>
      <h2>Custom Validation POC</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Employee Name */}

        <div style={{ marginBottom: "15px" }}>
          <input
            placeholder="Employee Name"
            {...register("employeeName", {
              required: "Employee Name is required",

              validate: (value) => {
                if (value.length < 3) {
                  return "Name should contain at least 3 characters";
                }

                if (!/^[A-Za-z ]+$/.test(value)) {
                  return "Only alphabets are allowed";
                }

                return true;
              },
            })}
          />

          <p style={{ color: "red" }}>
            {errors.employeeName?.message}
          </p>
        </div>

        {/* Age */}

        <div style={{ marginBottom: "15px" }}>
          <input
            type="number"
            placeholder="Age"
            {...register("age", {
              required: "Age is required",

              valueAsNumber: true,

              validate: (value) => {
                if (value < 18) {
                  return "Age must be 18 or above";
                }

                if (value > 60) {
                  return "Age should not exceed 60";
                }

                return true;
              },
            })}
          />

          <p style={{ color: "red" }}>
            {errors.age?.message}
          </p>
        </div>

        <button type="submit">
          Register
        </button>

      </form>
    </div>
  );
};

export default CustomValidationPOC;