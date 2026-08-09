import { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "../components/Checkbox";

function Wrapper() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
    />
  );
}

describe("Checkbox Component", () => {

  test("checks the checkbox", async () => {
    render(<Wrapper />);

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  test("disabled checkbox", () => {
    render(
      <Checkbox
        checked={false}
        disabled={true}
        onChange={() => {}}
      />
    );

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeDisabled();
  });

  test("enabled checkbox", () => {
    render(
      <Checkbox
        checked={false}
        onChange={() => {}}
      />
    );

    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeEnabled();
  });

});