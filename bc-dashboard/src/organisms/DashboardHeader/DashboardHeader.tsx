import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import DueCard from "../../molecules/DueCard/DueCard";
import OutstandingCard from "../../molecules/OutstandingCard/OutstandingCard";
import CashKickCard from "../../molecules/CashKickCard/CashKickCard";

const DashboardHeader = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={4}
      sx={{ width: "100%" }}
    >
      <Box sx={{ flex: 1 }}>
        <DueCard
          badge="Due in 30 day(s)"
          dueDate="Due - May 03, 2021"
          amount="$14,204.55"
        />
      </Box>

      <Box sx={{ flex: 1 }}>
        <OutstandingCard
          amount="$170,454.55"
          progress={70}
        />
      </Box>

      <Box sx={{ flex: 1 }}>
        <CashKickCard />
      </Box>
    </Stack>
  );
};

export default DashboardHeader;