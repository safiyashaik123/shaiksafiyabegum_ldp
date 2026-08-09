import "./typography.css";

type TypographyProps = {
  text: string;
  variant?: "h1" | "h2" | "body" | "caption";
  color?: "primary" | "secondary" | "success" | "danger";
  textColor?: string;
};

function Typography({
  text,
  variant = "body",
  color = "primary",
  textColor,
}: TypographyProps) {
  return (
    <p
      className={`typography ${variant} ${color}`}
      style={{ color: textColor }}
    >
      {text}
    </p>
  );
}

export default Typography;