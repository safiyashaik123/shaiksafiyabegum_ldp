type BookProps = {
  bookName: string;
  author: string;
  price: number;
};

function FunctionalBook({ bookName, author, price }: BookProps) {
  return (
    <>
      <h2>Book Details</h2>

      <p>Book : {bookName}</p>

      <p>Author : {author}</p>

      <p>Price : ₹{price}</p>
    </>
  );
}

export default FunctionalBook;