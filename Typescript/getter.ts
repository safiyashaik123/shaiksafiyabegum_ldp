class Employee {

    constructor(

        public employeeId: number,
        public employeeName: string,
        private employeeSalary: number

    ) {}

    get Salary(): number {

        return this.employeeSalary;

    }

    set Salary(value: number) {

        if (value > 0) {

            this.employeeSalary = value;

        } else {

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
export{};