import { Stack } from "@mui/material";

import Label from "../../atoms/Label/Label";
import Value from "../../atoms/Value/Value";

type PaymentRowProps = {
  label: string;
  value: string;
};

function PaymentRow({
  label,
  value,
}: PaymentRowProps) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ py: 0.4 }}
    >
      <Label>{label}</Label>

      <Value>{value}</Value>
    </Stack>
  );
}

export default PaymentRow;