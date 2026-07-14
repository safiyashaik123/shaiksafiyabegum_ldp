import { Button } from "@mui/material";
import type { ReactNode } from "react";

type CustomButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  variant?: "contained" | "outlined";
  small?: boolean;
};

function CustomButton({
  children,
  onClick,
  fullWidth = false,
  variant = "contained",
  small = false,
}: CustomButtonProps) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      sx={{
        textTransform: "none",
        borderRadius: "12px",
        boxShadow: "none",

        ...(small
          ? {
              minWidth: "58px",
              height: "32px",
              padding: "4px 12px",
              fontSize: "12px",
              fontWeight: 600,
              backgroundColor: "#6D5EF7",
            }
          : {
              height: "48px",
              fontSize: "16px",
              fontWeight: 600,
              backgroundColor: "#6D5EF7",
            }),

        "&:hover": {
          backgroundColor: "#5B4EE6",
          boxShadow: "none",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;