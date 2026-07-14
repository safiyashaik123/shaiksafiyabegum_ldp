import { Typography } from "@mui/material";
import type { ReactNode } from "react";

type ValueProps = {
  children: ReactNode;
};

function Value({ children }: ValueProps) {
  return (
    <Typography
      variant="body1"
      color="text.primary"
    >
      {children}
    </Typography>
  );
}

export default Value;