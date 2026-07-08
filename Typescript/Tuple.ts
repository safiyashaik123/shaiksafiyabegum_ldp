// Normal Tuple
let employee: [number, string, boolean] = [
    101,
    "Safiya",
    true
];

console.log(employee);

// Access
console.log(employee[0]);
console.log(employee[1]);

// Update
employee[1] = "Rahul";

console.log(employee);

// Optional Tuple
let product: [number, string, number?] = [
    1001,
    "Laptop"
];

console.log(product);

// Readonly Tuple
let country: readonly [string, string] = [
    "IN",
    "India"
];

console.log(country);

// Destructuring
let [employeeId, employeeName, employeeStatus] = employee;

console.log(employeeId);
console.log(employeeName);
console.log(employeeStatus);
export{};