import { useState, useTransition } from "react";

function TransitionPOC() {
  const [title, setTitle] = useState("No Cards Loaded");
  const [cards, setCards] = useState<number[]>([]);

  const [isPending, startTransition] = useTransition();

  function loadCards() {
    // Urgent Update
    setTitle("Cards Loading...");

    // Non-Urgent Update
    startTransition(() => {
      const data = Array.from({ length: 5000 }, (_, index) => index + 1);

      setCards(data);
    });
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{title}</h2>

      <button onClick={loadCards}>
        Load Cards
      </button>

      {isPending && <p>Loading Cards...</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5,100px)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card}
            style={{
              border: "1px solid black",
              padding: "10px",
            }}
          >
            Card {card}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TransitionPOC;