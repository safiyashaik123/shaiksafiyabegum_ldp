import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import SummaryInfoCard from "../../molecules/SummaryInfoCard/SummaryInfoCard";
import CashKickCard from "../../molecules/CashKickCard/CashKickCard";

import TermCapIcon from "../../assets/icons/term-cap.svg";
import AvailableCreditIcon from "../../assets/icons/available-credit.svg";
import InterestRateIcon from "../../assets/icons/interest-rate.svg";

const CashAccelerationSummary = () => {
  return (
    <Stack
      direction={{
        xs: "column",
        md: "row",
      }}
      spacing={3}
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          flex: 2,
        }}
      >
        <SummaryInfoCard
          items={[
            {
              icon: (
                <Box
  component="img"
  src={TermCapIcon}
  alt="Term Cap"
  sx={{
    width: 75,
    height: 75,
    objectFit: "contain",
  }}
/>
              ),
              title: "Term cap",
              value: "12 Months",
            },
            {
              icon: (
                <Box
                  component="img"
                  src={AvailableCreditIcon}
                  alt="Available Credit"
                  sx={{
                   width: 75,
                 height: 75,
                 objectFit: "contain",
                  }}
                />
              ),
              title: "Available credit",
              value: "$709.45k",
            },
            {
              icon: (
                <Box
                  component="img"
                  src={InterestRateIcon}
                  alt="Interest Rate"
                  sx={{
                   width: 75,
                     height: 75,
                     objectFit: "contain",
                  }}
                />
              ),
              title: "Max interest rate",
              value: "12.00%",
            },
          ]}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
        }}
      >
        <CashKickCard />
      </Box>
    </Stack>
  );
};

export default CashAccelerationSummary;