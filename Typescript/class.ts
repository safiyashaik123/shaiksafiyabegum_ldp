class Employee {

    employeeId: number = 101;

    employeeName: string = "Safiya";

    employeeSalary: number = 50000;

    displayEmployee(): void {

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
export{};