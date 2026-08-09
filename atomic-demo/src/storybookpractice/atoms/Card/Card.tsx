import "./card.css";

type CardProps = {
  title: string;
  description: string;
  showFooter?: boolean;
};

function Card({
  title,
  description,
  showFooter = true,
}: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <p>{description}</p>

      {showFooter && (
        <div className="footer">
          Storybook Card
        </div>
      )}
    </div>
  );
}

export default Card;