import { Box } from "@mui/material";

import LeftSection from "../../organisms/LeftSection/LeftSection";
import SignInCard from "../../organisms/SignInCard/SignInCard";

function SignInTemplate() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "#FAFAFA",
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1.1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#FAFAFA",
        }}
      >
        <LeftSection />
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 0.9,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#FFFFFF",
          px: 4,
        }}
      >
        <SignInCard />
      </Box>
    </Box>
  );
}

export default SignInTemplate;