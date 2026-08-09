import MuiButton, {
  ButtonProps,
} from "@mui/material/Button";

const Button = ({
  children,
  ...props
}: ButtonProps) => {
  return (
    <MuiButton
      disableElevation
      variant="contained"
      sx={{
        borderRadius: "12px",
        height: 48,
        textTransform: "none",
        fontWeight: 600,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;