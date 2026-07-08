type Employee = {

    employeeId: number;
    employeeName: string;
    employeeSalary: number;
    employeeEmail?: string;

};

// Partial
let employee1: Partial<Employee> = {

    employeeSalary: 60000

};

// Required
let employee2: Required<Employee> = {

    employeeId: 101,
    employeeName: "Rahul",
    employeeSalary: 50000,
    employeeEmail: "rahul@gmail.com"

};

// Readonly
let employee3: Readonly<Employee> = {

    employeeId: 102,
    employeeName: "Anjali",
    employeeSalary: 70000

};

// Pick
let employee4: Pick<Employee,
    "employeeName" | "employeeSalary"> = {

    employeeName: "Ravi",
    employeeSalary: 55000

};

// Omit
let employee5: Omit<Employee,
    "employeeEmail"> = {

    employeeId: 103,
    employeeName: "John",
    employeeSalary: 45000

};

console.log(employee1);
console.log(employee2);
console.log(employee3);
console.log(employee4);
console.log(employee5);
export{};