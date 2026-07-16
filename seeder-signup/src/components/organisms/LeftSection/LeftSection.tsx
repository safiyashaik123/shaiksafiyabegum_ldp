import { Box } from "@mui/material";

import illustration from "../../../assets/images/signin-illustration.png";

function LeftSection() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#FAFAFA",
      }}
    >
      <Box
        component="img"
        src={illustration}
        alt="Sign In Illustration"
        sx={{
          width: "60%",
          maxWidth: 320,
          minWidth: 240,
          objectFit: "contain",
        }}
      />
    </Box>
  );
}

export default LeftSection;