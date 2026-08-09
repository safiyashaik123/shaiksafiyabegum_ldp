import { render, screen, waitFor} from "@testing-library/react";
import EmployeeDirectory from "../components/EmployeeDirectory";
import * as employeeApi from "../services/employeeApi";

jest.mock("../services/employeeApi");

beforeEach(() => {
  jest.clearAllMocks();
});

describe("EmployeeDirectory", () => {

  test("shows loading initially", () => {
    (employeeApi.fetchEmployees as jest.Mock).mockResolvedValue([]);

    render(<EmployeeDirectory />);

    expect(
      screen.getByText("Loading...")
    ).toBeInTheDocument();
  });

  test("renders employees from mocked API", async () => {
    (employeeApi.fetchEmployees as jest.Mock).mockResolvedValue([
      {
        id: 1,
        name: "Safiya",
      },
      {
        id: 2,
        name: "Rahul",
      },
    ]);

    render(<EmployeeDirectory />);

    expect(
      await screen.findByText("Safiya")
    ).toBeInTheDocument();

    expect(
      await screen.findByText("Rahul")
    ).toBeInTheDocument();

    expect(
      employeeApi.fetchEmployees
    ).toHaveBeenCalled();
  });

  test("shows empty list when API returns no employees", async () => {
    (employeeApi.fetchEmployees as jest.Mock).mockResolvedValue([]);

    render(<EmployeeDirectory />);

    expect(
      await screen.findByRole("list")
    ).toBeInTheDocument();

    expect(
      screen.queryByRole("listitem")
    ).not.toBeInTheDocument();

    expect(
      employeeApi.fetchEmployees
    ).toHaveBeenCalled();
  });

  test("shows error message when API fails", async () => {
    (employeeApi.fetchEmployees as jest.Mock).mockRejectedValue(
      new Error("Network Error")
    );

    render(<EmployeeDirectory />);

    expect(
      await screen.findByText("Failed to load employees")
    ).toBeInTheDocument();

    expect(
      employeeApi.fetchEmployees
    ).toHaveBeenCalled();
  });

  test("waits until employees are rendered using waitFor", async () => {
  (employeeApi.fetchEmployees as jest.Mock).mockResolvedValue([
    {
      id: 1,
      name: "Safiya",
    },
    {
      id: 2,
      name: "Rahul",
    },
  ]);

  render(<EmployeeDirectory />);

  await waitFor(() => {
    expect(
      screen.getByText("Safiya")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Rahul")
    ).toBeInTheDocument();
  });

  expect(
    employeeApi.fetchEmployees
  ).toHaveBeenCalled();

});



});