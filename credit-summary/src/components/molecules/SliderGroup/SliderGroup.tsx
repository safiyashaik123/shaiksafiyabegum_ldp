import { Stack } from "@mui/material";

import Typography from "../../atoms/Typography/Typography";
import Button from "../../atoms/Button/Button";
import Slider from "../../atoms/Slider/Slider";

type SliderGroupProps = {
  selectedAmount: number;
  maxAmount: number;
  onSliderChange: (value: number) => void;
  onReset: () => void;
};

function SliderGroup({
  selectedAmount,
  maxAmount,
  onSliderChange,
  onReset,
}: SliderGroupProps) {
  return (
    <Stack spacing={2}>
      {/* Header */}

      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Slide to autoselect
        </Typography>

        <Button
          variant="contained"
          size="small"
          onClick={onReset}
          sx={{
            minWidth: 70,
            borderRadius: "10px",
          }}
        >
          Reset
        </Button>
      </Stack>

      {/* Slider */}

      <Slider
        value={selectedAmount}
        min={0}
        max={maxAmount}
        step={1000}
        onChange={(_, value) =>
          onSliderChange(value as number)
        }
      />

      {/* Selected Amount */}

      <Stack
  direction="row"
  spacing={0.5}
  sx={{
    alignItems: "center",
    flexWrap: "wrap",
  }}
>
  <Typography
    variant="body2"
    sx={{
      color: "primary.main",
      fontWeight: 600,
    }}
  >
    $
    {selectedAmount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}
  </Typography>

  <Typography
    variant="body2"
    color="text.secondary"
  >
    selected of $
    {maxAmount.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}
  </Typography>
</Stack>
    </Stack>
  );
}

export default SliderGroup;