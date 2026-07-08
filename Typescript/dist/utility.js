"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Partial
let employee1 = {
    employeeSalary: 60000
};
// Required
let employee2 = {
    employeeId: 101,
    employeeName: "Rahul",
    employeeSalary: 50000,
    employeeEmail: "rahul@gmail.com"
};
// Readonly
let employee3 = {
    employeeId: 102,
    employeeName: "Anjali",
    employeeSalary: 70000
};
// Pick
let employee4 = {
    employeeName: "Ravi",
    employeeSalary: 55000
};
// Omit
let employee5 = {
    employeeId: 103,
    employeeName: "John",
    employeeSalary: 45000
};
console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log(employee5);
