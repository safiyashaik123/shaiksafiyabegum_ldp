import { Typography } from "@mui/material";
import type { ReactNode } from "react";

type LabelProps = {
  children: ReactNode;
};

function Label({ children }: LabelProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
    >
      {children}
    </Typography>
  );
}

export default Label;