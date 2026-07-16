import MuiTypography from "@mui/material/Typography";

import type { TypographyProps } from "@mui/material/Typography";
import type { ReactNode } from "react";

type CustomTypographyProps = TypographyProps & {
  children: ReactNode;
};

function Typography({
  children,
  ...props
}: CustomTypographyProps) {
  return (
    <MuiTypography {...props}>
      {children}
    </MuiTypography>
  );
}

export default Typography;