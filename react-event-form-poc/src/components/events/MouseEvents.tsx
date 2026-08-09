import { useState } from "react";

const MouseEvents = () => {
  const [status, setStatus] = useState("No Mouse Event");
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setStatus("Employee Card Clicked");
  };

  const handleDoubleClick = () => {
    setFavorite(!favorite);
    setStatus("Employee Marked as Favourite");
  };

  const handleMouseEnter = () => {
    setStatus("Mouse Entered Employee Card");
  };

  const handleMouseLeave = () => {
    setStatus("Mouse Left Employee Card");
  };

  return (
    <>
      <h2>Mouse Events</h2>

      <div
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          border: "1px solid black",
          padding: "10px",
          width: "250px",
          cursor: "pointer",
        }}
      >
        <h3>John Doe</h3>

        <p>Role : React Developer</p>

        <p>
          Favourite :
          {favorite ? " ⭐ Yes" : " No"}
        </p>
      </div>

      <p>
        <strong>Status :</strong> {status}
      </p>
    </>
  );
};

export default MouseEvents;