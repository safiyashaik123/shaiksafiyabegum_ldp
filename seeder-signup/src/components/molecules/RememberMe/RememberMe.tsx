import { Box } from "@mui/material";

import Checkbox from "../../atoms/Checkbox/Checkbox";
import Typography from "../../atoms/Typography/Typography";

type Props = {
  checked: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function RememberSection({
  checked,
  onChange,
}: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 0.5,
      }}
    >
      <Checkbox
        label="Remember me"
        checked={checked}
        onChange={onChange}
      />

      <Typography
        variant="body2"
        sx={{
          fontSize: 14,
          fontWeight: 500,
          color: "#5B21FF",
          cursor: "pointer",

          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        Forgot password?
      </Typography>
    </Box>
  );
}

export default RememberSection;