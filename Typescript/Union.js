"use strict";
let employee = {
    employeeId: "EMP101",
    employeeName: "Safiya"
};
console.log(employee);
if (typeof employee.employeeId === "string") {
    console.log(employee.employeeId.toUpperCase());
}
employee.employeeId = 101;
console.log(employee);
