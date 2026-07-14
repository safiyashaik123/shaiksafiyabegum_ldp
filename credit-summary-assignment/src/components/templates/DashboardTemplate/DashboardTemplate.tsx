import { Box, Container } from "@mui/material";

import SummaryCard from "../../organisms/SummaryCard/SummaryCard";

function DashboardTemplate() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Container maxWidth="sm">
        <SummaryCard />
      </Container>
    </Box>
  );
}

export default DashboardTemplate;