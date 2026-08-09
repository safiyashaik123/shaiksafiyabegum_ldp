import { useForm } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    alert("Login Successful");

    console.log(data);

    reset();
  };

  return (
    <>
      <h2>React Hook Form Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <p>
          Email
          <br />

          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
          />

          {errors.email && (
            <p>{errors.email.message}</p>
          )}
        </p>

        <p>
          Password
          <br />

          <input
            type="password"
            {...register("password", {
              required: "Password is required",
            })}
          />

          {errors.password && (
            <p>{errors.password.message}</p>
          )}
        </p>

        <button type="submit">
          Login
        </button>

      </form>
    </>
  );
};

export default LoginForm;