import {
  Checkbox as MuiCheckbox,
  FormControlLabel,
} from "@mui/material";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

function Checkbox({
  label,
  checked,
  onChange,
}: CheckboxProps) {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          checked={checked}
          onChange={onChange}
        />
      }
      label={label}
    />
  );
}

export default Checkbox;