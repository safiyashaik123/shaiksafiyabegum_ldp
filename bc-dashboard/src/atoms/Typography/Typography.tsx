import MuiTypography, {
  TypographyProps as MuiTypographyProps,
} from "@mui/material/Typography";

export interface TypographyProps extends MuiTypographyProps {}

const Typography = ({
  children,
  ...props
}: TypographyProps) => {
  return (
    <MuiTypography
      color="text.primary"
      {...props}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;