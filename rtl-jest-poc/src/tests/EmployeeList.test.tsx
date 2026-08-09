import { render, screen } from "@testing-library/react";
import EmployeeList from "../components/EmployeeList";

const employees = [
  { id: 1, name: "Safiya" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "John" },
];

describe("Employee List", () => {
  test("renders all employees", () => {
    render(<EmployeeList employees={employees} />);

    const items = screen.getAllByRole("listitem");

    expect(items).toHaveLength(3);
  });

  test("returns empty array when no employees", () => {
    render(<EmployeeList employees={[]} />);

    const items = screen.queryAllByRole("listitem");

    expect(items).toHaveLength(0);
  });

  test("finds employees asynchronously", async () => {
    render(<EmployeeList employees={employees} />);

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(3);
  });
});