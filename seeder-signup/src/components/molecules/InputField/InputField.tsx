import { Stack } from "@mui/material";

import Typography from "../../atoms/Typography/Typography";
import TextField from "../../atoms/TextField/TextField";

type InputFieldProps = {
  label: string;
  type?: string;
  value: string;
  placeholder: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  endAdornment?: React.ReactNode;
};

function InputField({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  endAdornment,
}: InputFieldProps) {
  return (
    <Stack spacing={0.8}>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 600,
          fontSize: 14,
          color: "#424242",
        }}
      >
        {label}
      </Typography>

      <TextField
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        slotProps={{
          input: {
            endAdornment,
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            height: 42,
            borderRadius: 1,
            fontSize: 14,
            backgroundColor: "#FFFFFF",
          },

          "& .MuiInputBase-input::placeholder": {
            color: "#9E9E9E",
            opacity: 1,
          },

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#E0E0E0",
          },

          "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#CFCFCF",
          },

          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#5B21FF",
            borderWidth: "1px",
          },
        }}
      />
    </Stack>
  );
}

export default InputField;