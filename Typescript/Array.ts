// Type Inference
let cities = ["Hyderabad", "Chennai", "Delhi"];

// Readonly Array
let countries: readonly string[] = [
    "India",
    "Japan",
    "USA"
];

// Array of Objects
let employees = [
    {
        employeeId: 101,
        employeeName: "Rahul"
    },
    {
        employeeId: 102,
        employeeName: "Safiya"
    }
];

// Multi-Dimensional Array
let employeeMarks = [
    [90, 80],
    [95, 85]
];

console.log(cities);

console.log(countries);

console.log(employees[1].employeeName);

console.log(employeeMarks[0][1]);