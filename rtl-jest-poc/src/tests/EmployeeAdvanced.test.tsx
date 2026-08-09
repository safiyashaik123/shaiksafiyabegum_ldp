import {
  render,
  screen,
  within,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import EmployeeCards from "../components/EmployeeCards";
import LoadingEmployees from "../components/LoadingEmployees";

import * as employeeService from "../services/employeeService";

jest.mock("../services/employeeService");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("EmployeeCards", () => {

  test("loads employees using mockResolvedValueOnce", async () => {

    (employeeService.getEmployees as jest.Mock)
      .mockResolvedValueOnce([
        {
          id: 1,
          name: "Safiya",
          role: "Developer",
        },
        {
          id: 2,
          name: "Rahul",
          role: "Tester",
        },
      ]);

    render(<EmployeeCards />);

    await userEvent.click(
      screen.getByRole("button", {
        name: "Load Employees",
      })
    );

    expect(
      await screen.findByText("Safiya")
    ).toBeInTheDocument();

    expect(
      employeeService.getEmployees
    ).toHaveBeenCalledTimes(1);
  });

  test("shows error using mockRejectedValueOnce", async () => {

    (employeeService.getEmployees as jest.Mock)
      .mockRejectedValueOnce(
        new Error("Network Error")
      );

    render(<EmployeeCards />);

    await userEvent.click(
      screen.getByRole("button", {
        name: "Load Employees",
      })
    );

    expect(
      await screen.findByText("Failed to load employees")
    ).toBeInTheDocument();

    expect(
      employeeService.getEmployees
    ).toHaveBeenCalledTimes(1);
  });

  test("uses within()", async () => {

    (employeeService.getEmployees as jest.Mock)
      .mockResolvedValueOnce([
        {
          id: 1,
          name: "Safiya",
          role: "Developer",
        },
        {
          id: 2,
          name: "Rahul",
          role: "Tester",
        },
      ]);

    render(<EmployeeCards />);

    await userEvent.click(
      screen.getByRole("button", {
        name: "Load Employees",
      })
    );

    const cards =
      await screen.findAllByTestId(
        "employee-card"
      );

    expect(cards).toHaveLength(2);

    expect(
      within(cards[0]).getByText("Safiya")
    ).toBeInTheDocument();

    expect(
      within(cards[0]).getByText("Developer")
    ).toBeInTheDocument();

    expect(
      within(cards[1]).getByText("Rahul")
    ).toBeInTheDocument();

    expect(
      within(cards[1]).getByText("Tester")
    ).toBeInTheDocument();
  });

  test("screen debug example", async () => {

    (employeeService.getEmployees as jest.Mock)
      .mockResolvedValueOnce([
        {
          id: 1,
          name: "Safiya",
          role: "Developer",
        },
      ]);

    render(<EmployeeCards />);

    await userEvent.click(
      screen.getByRole("button", {
        name: "Load Employees",
      })
    );

    await waitFor(() => {
      expect(
        screen.getByText("Safiya")
      ).toBeInTheDocument();
    });

    screen.debug();

    screen.logTestingPlaygroundURL();
  });

});

describe("LoadingEmployees", () => {

  test("waits for loading text to disappear", async () => {

    render(<LoadingEmployees />);

    await waitForElementToBeRemoved(() =>
      screen.getByText("Loading...")
    );

    expect(
      screen.getByText("Safiya")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Rahul")
    ).toBeInTheDocument();
  });

});