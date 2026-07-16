import { Stack } from "@mui/material";

import Button from "../../atoms/Button/Button";
import Typography from "../../atoms/Typography/Typography";

type SocialButtonProps = {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
};

function SocialButton({
  icon,
  text,
  onClick,
}: SocialButtonProps) {
  return (
    <Button
      variant="outlined"
      fullWidth
      onClick={onClick}
      sx={{
        height: 42,
        borderRadius: 1,
        textTransform: "none",
        backgroundColor: "#FFFFFF",
        borderColor: "#E5E7EB",
        color: "#424242",
        justifyContent: "center",
        boxShadow: "none",

        "&:hover": {
          backgroundColor: "#FAFAFA",
          borderColor: "#D1D5DB",
          boxShadow: "none",
        },
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}

        <Typography
          variant="body2"
          sx={{
            fontSize: 14,
            fontWeight: 500,
            color: "#424242",
          }}
        >
          {text}
        </Typography>
      </Stack>
    </Button>
  );
}

export default SocialButton;