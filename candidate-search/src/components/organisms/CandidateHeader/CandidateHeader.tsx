import { Box } from "@mui/material";

import Typography from "../../atoms/Typography/Typography";
import HeaderActions from "../../molecules/HeaderActions/HeaderActions";

function CandidateHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
        }}
      >
        Candidates
      </Typography>

      <HeaderActions />
    </Box>
  );
}

export default CandidateHeader;