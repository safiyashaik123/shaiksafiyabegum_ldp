import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
  test("renders the button with correct text", () => {
    render(<Button label="Save" />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Save");
  });

  test("finds the button using text", () => {
    render(<Button label="Submit" />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });
});