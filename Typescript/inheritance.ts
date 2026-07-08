class Person {

    constructor(public employeeName: string) {}

    displayRole(): void {

        console.log("Person");

    }

}

class Employee extends Person {

    constructor(
        employeeName: string,
        public employeeSalary: number
    ) {

        super(employeeName);

    }

    override displayRole(): void {

        super.displayRole();

        console.log("Employee");

    }

}

let employee = new Employee("Safiya", 50000);

console.log(employee.employeeName);

console.log(employee.employeeSalary);

employee.displayRole();
export{};