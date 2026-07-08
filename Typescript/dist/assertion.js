"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Assertion with any
let employeeData = "Safiya";
let employeeLength = employeeData.length;
console.log(employeeLength);
// Assertion with unknown
let language = "TypeScript";
console.log(language.toUpperCase());
// Assertion with Object
let employeeObject = {
    employeeId: 101,
    employeeName: "Rahul"
};
let employee = employeeObject;
console.log(employee.employeeName);
// Assertion with Array
let employeeArray = [
    "Anjali",
    "Ravi"
];
let names = employeeArray;
console.log(names[0]);
