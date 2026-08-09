const EventPropagation = () => {
  const handleCardClick = () => {
    alert("Employee Card Clicked");
  };

  const handleView = (
    id: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    // e.stopPropagation();

    alert(`Viewing Employee ${id}`);
  };

  const handleDelete = (
    id: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    alert(`Deleted Employee ${id}`);
  };

  return (
    <>
      <h2>Event Propagation</h2>

      <p>
        Click the employee card or the buttons below.
      </p>

      <div
        onClick={handleCardClick}
        style={{
          border: "2px solid black",
          padding: "15px",
          width: "300px",
        }}
      >
        <h3>John Doe</h3>

        <p>React Developer</p>

        <button onClick={(e) => handleView(101, e)}>
          View
        </button>

        {" "}

        <button onClick={(e) => handleDelete(101, e)}>
          Delete
        </button>
      </div>
    </>
  );
};

export default EventPropagation;