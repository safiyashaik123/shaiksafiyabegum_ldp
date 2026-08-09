import "./button.css";

type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  rounded?: boolean;
  onClick?: () => void;
};

function Button({
  label,
  variant = "primary",
  size = "medium",
  disabled = false,
  rounded = false,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`button ${variant} ${size} ${rounded ? "rounded" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;