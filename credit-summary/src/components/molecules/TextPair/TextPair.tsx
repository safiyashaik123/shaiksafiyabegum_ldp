import { Stack } from "@mui/material";

import Typography from "../../atoms/Typography/Typography";

type TextPairProps = {
  label: string;
  value: string;
  labelVariant?: "body1" | "body2";
  valueVariant?: "body1" | "body2" | "h6";
};

function TextPair({
  label,
  value,
  labelVariant = "body2",
  valueVariant = "body1",
}: TextPairProps) {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        variant={labelVariant}
        color="text.secondary"
      >
        {label}
      </Typography>

      <Typography
        variant={valueVariant}
        color="text.primary"
        sx={{
          fontWeight: 600,
        }}
      >
        {value}
      </Typography>
    </Stack>
  );
}

export default TextPair;