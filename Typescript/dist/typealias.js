"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = {
    employeeId: 101,
    employeeName: "Safiya",
    employeeSalary: 50000,
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};
console.log(employee.employeeName);
console.log(employee.address.city);
employee.employeeName = "Rahul";
console.log(employee);
let employee1 = "Safiya";
console.log(employee1);
