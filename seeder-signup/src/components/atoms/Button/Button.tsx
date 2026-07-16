import { Button as MuiButton } from "@mui/material";
import type { ButtonProps } from "@mui/material";

function Button(props: ButtonProps) {
  return <MuiButton {...props} />;
}

export default Button;