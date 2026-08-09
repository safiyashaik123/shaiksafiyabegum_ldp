import  { Component } from "react";

type BookProps = {
  bookName: string;
  author: string;
  price: number;
};

class ClassBook extends Component<BookProps> {
  render() {
    return (
      <>
        <h2>Book Details</h2>

        <p>Book : {this.props.bookName}</p>

        <p>Author : {this.props.author}</p>

        <p>Price : ₹{this.props.price}</p>
      </>
    );
  }
}

export default ClassBook;