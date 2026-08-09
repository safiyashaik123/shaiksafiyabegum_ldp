import { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../components/Input";

function Wrapper() {
  const [name, setName] = useState("");

  return (
    <Input
      label="Name"
      value={name}
      placeholder="Enter your name"
      onChange={setName}
    />
  );
}

describe("Input Component", () => {
  test("renders label and input", () => {
    render(<Wrapper />);

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your name")
    ).toBeInTheDocument();
  });

  test("updates input using userEvent", async () => {
    render(<Wrapper />);

    const input = screen.getByLabelText("Name");

    await userEvent.type(input, "Safiya");

    expect(input).toHaveValue("Safiya");
  });

  test("updates input using fireEvent", () => {
    render(<Wrapper />);

    const input = screen.getByLabelText("Name");

    fireEvent.change(input, {
      target: {
        value: "React",
      },
    });

    expect(input).toHaveValue("React");
  });

  test("input receives focus", async () => {
    render(<Wrapper />);

    const input = screen.getByLabelText("Name");

    await userEvent.click(input);

    expect(input).toHaveFocus();
  });

  test("find input using display value", async () => {
    render(<Wrapper />);

    const input = screen.getByLabelText("Name");

    await userEvent.type(input, "Testing");

    expect(
      screen.getByDisplayValue("Testing")
    ).toBeInTheDocument();
  });
});