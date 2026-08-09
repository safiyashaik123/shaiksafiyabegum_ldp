import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  employeeName: string;
};

const ControllerPOC = () => {
  const {
    control,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      employeeName: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Submitted Successfully");
  };

  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <h2>Controller POC</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <Controller
          name="employeeName"
          control={control}
          rules={{
            required: "Employee Name is required",
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="Employee Name"
              fullWidth
              margin="normal"
              {...field}
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Button
          variant="contained"
          type="submit"
        >
          Submit
        </Button>

      </form>
    </div>
  );
};

export default ControllerPOC;