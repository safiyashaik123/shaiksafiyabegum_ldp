"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    employeeName;
    constructor(employeeName) {
        this.employeeName = employeeName;
    }
    displayRole() {
        console.log("Person");
    }
}
class Employee extends Person {
    employeeSalary;
    constructor(employeeName, employeeSalary) {
        super(employeeName);
        this.employeeSalary = employeeSalary;
    }
    displayRole() {
        super.displayRole();
        console.log("Employee");
    }
}
let employee = new Employee("Safiya", 50000);
console.log(employee.employeeName);
console.log(employee.employeeSalary);
employee.displayRole();
