"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    employeeId = 101;
    employeeName = "Safiya";
    employeeSalary = 50000;
    displayEmployee() {
        console.log("Employee ID:", this.employeeId);
        console.log("Employee Name:", this.employeeName);
        console.log("Employee Salary:", this.employeeSalary);
    }
}
let employee = new Employee();
employee.displayEmployee();
employee.employeeSalary = 60000;
console.log("\nAfter Salary Update:");
employee.displayEmployee();
