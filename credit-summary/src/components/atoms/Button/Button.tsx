import MuiButton from "@mui/material/Button";

import type { ButtonProps } from "@mui/material/Button";
import type { ReactNode } from "react";

type CustomButtonProps = ButtonProps & {
  children: ReactNode;
};

function Button({
  children,
  ...props
}: CustomButtonProps) {
  return (
    <MuiButton {...props}>
      {children}
    </MuiButton>
  );
}

export default Button;