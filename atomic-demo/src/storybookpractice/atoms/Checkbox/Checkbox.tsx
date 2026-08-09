import "./checkbox.css";

type CheckboxProps = {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

function Checkbox({
  label,
  checked = false,
  disabled = false,
  onChange,
}: CheckboxProps) {
  return (
    <label className="checkbox-container">
      <input
        type="checkbox"
        defaultChecked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
      />

      <span>{label}</span>
    </label>
  );
}

export default Checkbox;