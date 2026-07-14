import { Stack, Typography } from "@mui/material";
import Label from "../../atoms/Label/Label";

type RateRowProps = {
  percentage: number;
  amount: number;
};

function RateRow({
  percentage,
  amount,
}: RateRowProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Label>Rate %</Label>

      <Stack
        direction="row"
        spacing={0.5}
        alignItems="center"
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{
            fontSize: "11px",
          }}
        >
          ({percentage.toFixed(2)}%)
        </Typography>

        <Typography
          variant="body1"
          color="text.primary"
          sx={{
            fontWeight: 700,
          }}
        >
          ${amount.toLocaleString()}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default RateRow;