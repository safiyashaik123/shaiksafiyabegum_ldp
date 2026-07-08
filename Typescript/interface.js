"use strict";
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
employee.employeeSalary = 60000;
console.log(employee);
