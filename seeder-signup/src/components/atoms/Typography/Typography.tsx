import {
  Typography as MuiTypography,
  type TypographyProps,
} from "@mui/material";

function Typography({
  children,
  ...props
}: TypographyProps) {
  return (
    <MuiTypography {...props}>
      {children}
    </MuiTypography>
  );
}

export default Typography;