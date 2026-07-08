"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let employee = {
    employeeId: 101,
    employeeName: "Safiya",
    isPlaced: true,
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};
console.log(employee.employeeName);
console.log(employee.address.city);
employee.employeeName = "Rahul";
console.log(employee);
