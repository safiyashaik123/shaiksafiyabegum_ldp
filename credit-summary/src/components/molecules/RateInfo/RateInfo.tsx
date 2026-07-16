import { Stack } from "@mui/material";

import Typography from "../../atoms/Typography/Typography";

type RateInfoProps = {
  label: string;
  percentage: string;
  amount: string;
};

function RateInfo({
  label,
  percentage,
  amount,
}: RateInfoProps) {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left Side */}
      <Typography
        variant="body2"
        color="text.secondary"
      >
        {label}
      </Typography>

      {/* Right Side */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          alignItems: "center",
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
        >
          ({percentage})
        </Typography>

        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            fontWeight: 600,
          }}
        >
          {amount}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default RateInfo;