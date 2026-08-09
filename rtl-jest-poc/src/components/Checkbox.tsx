type CheckboxProps = {
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

function Checkbox({
  checked,
  disabled = false,
  onChange,
}: CheckboxProps) {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
      />
      Accept Terms
    </label>
  );
}

export default Checkbox;