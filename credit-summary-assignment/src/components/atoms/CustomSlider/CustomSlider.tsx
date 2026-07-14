import { Slider } from "@mui/material";

type CustomSliderProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
};

function CustomSlider({
  value,
  min = 0,
  max = 100,
  onChange,
}: CustomSliderProps) {
  return (
    <Slider
      value={value}
      min={min}
      max={max}
      onChange={(_, value) =>
        onChange(value as number)
      }
    />
  );
}

export default CustomSlider;