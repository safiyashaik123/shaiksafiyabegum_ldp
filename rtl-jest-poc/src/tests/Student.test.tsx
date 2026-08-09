// import { render, screen } from "@testing-library/react";
// import Student from "../components/Student";
// import * as studentService from "../services/studentService";

// jest.mock("../services/studentService");

// let totalTests = 0;

// /* ---------------- beforeAll ---------------- */

// beforeAll(() => {

//   console.log("Starting Student Test Suite");

// });

// /* ---------------- beforeEach ---------------- */

// beforeEach(() => {

//   console.log("Preparing Next Test");

//   jest.clearAllMocks();

// });

// /* ---------------- afterEach ---------------- */

// afterEach(() => {

//   console.log("Cleaning After Test");

//   jest.restoreAllMocks();

//   totalTests++;

// });

// /* ---------------- afterAll ---------------- */

// afterAll(() => {

//   console.log(`Executed ${totalTests} Tests`);

// });

// describe("Lifecycle Hook POC", () => {

//   test("First Student", () => {

//     (studentService.getStudentName as jest.Mock)
//       .mockReturnValue("Safiya");

//     render(<Student id={1}/>);

//     expect(
//       screen.getByText("Safiya")
//     ).toBeInTheDocument();

//     expect(studentService.getStudentName)
//       .toHaveBeenCalledTimes(1);

//   });
//      test("Mock Student Name using spyOn()", () => {

//     jest
//       .spyOn(studentService, "getStudentName")
//       .mockReturnValue("Mock Student");

//     render(<Student id={1}/>);

//     expect(
//       screen.getByText("Mock Student")
//     ).toBeInTheDocument();

//     expect(studentService.getStudentName)
//       .toHaveBeenCalledTimes(1);

//   });


//   test("Second Student", () => {

//     (studentService.getStudentName as jest.Mock)
//       .mockReturnValue("Rahul");

//     render(<Student id={2}/>);

//     expect(
//       screen.getByText("Rahul")
//     ).toBeInTheDocument();

//     expect(studentService.getStudentName)
//       .toHaveBeenCalledTimes(1);

//   });

// });
import { render, screen } from "@testing-library/react";
import Student from "../components/Student";
import * as studentService from "../services/studentService";

let totalTests = 0;

beforeAll(() => {

  console.log("Starting Student Test Suite");

});

beforeEach(() => {

  console.log("Preparing Next Test");

  jest.clearAllMocks();

});

afterEach(() => {

  console.log("Restoring Original Functions");

  jest.restoreAllMocks();

  totalTests++;

});

afterAll(() => {

  console.log(`Executed ${totalTests} Tests`);

});

describe("Lifecycle Hook POC", () => {

  test("Mock Student Name using spyOn()", () => {

    jest
      .spyOn(studentService, "getStudentName")
      .mockReturnValue("Mock Student");

    render(<Student id={1}/>);

    expect(
      screen.getByText("Mock Student")
    ).toBeInTheDocument();

    expect(studentService.getStudentName)
      .toHaveBeenCalledTimes(1);

  });

  test("Original Function Should Work Again", () => {

    render(<Student id={1}/>);

    expect(
      screen.getByText("Safiya")
    ).toBeInTheDocument();

  });

});
