type InputProps = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

function Input({
  label,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <div>
      <label htmlFor="name-input">{label}</label>

      <input
        id="name-input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;