import { Stack } from "@mui/material";

import Label from "../../atoms/Label/Label";
import Value from "../../atoms/Value/Value";

type SummaryRowProps = {
  label: string;
  value: string | number;
};

function SummaryRow({
  label,
  value,
}: SummaryRowProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ py: 0.4}}
    >
      <Label>{label}</Label>

      <Value>{value}</Value>
    </Stack>
  );
}

export default SummaryRow;