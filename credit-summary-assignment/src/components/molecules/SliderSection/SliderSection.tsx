import { Stack, Box } from "@mui/material";

import Label from "../../atoms/Label/Label";
import CustomButton from "../../atoms/CustomButton/CustomButton";
import CustomSlider from "../../atoms/CustomSlider/CustomSlider";

type SliderSectionProps = {
  value: number;
  onSliderChange: (value: number) => void;
  onReset: () => void;
};

function SliderSection({
  value,
  onSliderChange,
  onReset,
}: SliderSectionProps) {
  return (
    <Stack spacing={1.2}>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Label>
          Slide to autoselect
        </Label>

        <CustomButton
  small
  onClick={onReset}
>
  Reset
</CustomButton>

      </Box>

      <CustomSlider
        value={value}
        min={0}
        max={100}
        onChange={onSliderChange}
      />

    </Stack>
  );
}

export default SliderSection;