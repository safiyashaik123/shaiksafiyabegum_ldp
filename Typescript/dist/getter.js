"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    employeeId;
    employeeName;
    employeeSalary;
    constructor(employeeId, employeeName, employeeSalary) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.employeeSalary = employeeSalary;
    }
    get Salary() {
        return this.employeeSalary;
    }
    set Salary(value) {
        if (value > 0) {
            this.employeeSalary = value;
        }
        else {
            console.log("Salary must be greater than 0");
        }
    }
}
let employee = new Employee(101, "Safiya", 50000);
console.log(employee.employeeId);
console.log(employee.employeeName);
console.log(employee.Salary);
employee.Salary = 60000;
console.log(employee.Salary);
employee.Salary = -1000;
console.log(employee.Salary);
