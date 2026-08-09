import "./input.css";

type InputProps = {
  label: string;
  placeholder?: string;
  value?: string;
  type?: "text" | "email" | "password" | "number";
  disabled?: boolean;
  required?: boolean;
  ariaLabel?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

function Input({
  label,
  placeholder = "",
  value = "",
  type = "text",
  disabled = false,
  required = false,
  ariaLabel,
  onChange,
  onFocus,
  onBlur,
}: InputProps) {
  return (
    <div className="input-container">
      <label className="input-label">
        {label}
        {required && <span className="required">*</span>}
      </label>

      <input
        className="input"
        type={type}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
        required={required}
        aria-label={ariaLabel}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
}

export default Input;