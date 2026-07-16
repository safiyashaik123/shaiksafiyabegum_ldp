import {
  TextField as MuiTextField,
  type TextFieldProps,
} from "@mui/material";

function TextField(props: TextFieldProps) {
  return (
    <MuiTextField
      variant="outlined"
      fullWidth
      {...props}
    />
  );
}

export default TextField;