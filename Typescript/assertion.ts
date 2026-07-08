type Employee = {
    employeeId: number;
    employeeName: string;
};

// Assertion with any
let employeeData: any = "Safiya";

let employeeLength = (employeeData as string).length;

console.log(employeeLength);

// Assertion with unknown
let language: unknown = "TypeScript";

console.log((language as string).toUpperCase());

// Assertion with Object
let employeeObject: any = {
    employeeId: 101,
    employeeName: "Rahul"
};

let employee = employeeObject as Employee;

console.log(employee.employeeName);

// Assertion with Array
let employeeArray: any = [
    "Anjali",
    "Ravi"
];

let names = employeeArray as string[];

console.log(names[0]);
export{};