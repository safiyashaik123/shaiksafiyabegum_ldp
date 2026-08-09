import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SaveButton from "../components/SaveButton";

describe("SaveButton", () => {
  test("calls onSave using userEvent", async () => {
    const handleSave = jest.fn();

    render(<SaveButton onSave={handleSave} />);

    const button = screen.getByRole("button", {
      name: "Save",
    });

    await userEvent.click(button);

    expect(handleSave).toHaveBeenCalled();
    expect(handleSave).toHaveBeenCalledTimes(1);
  });

  test("calls onSave using fireEvent", () => {
    const handleSave = jest.fn();

    render(<SaveButton onSave={handleSave} />);

    const button = screen.getByRole("button", {
      name: "Save",
    });

    fireEvent.click(button);

    expect(handleSave).toHaveBeenCalled();
    expect(handleSave).toHaveBeenCalledTimes(1);
  });
});