type Address = {
    city: string;
    state: string;
};

type Employee = {
    readonly employeeId: number;
    employeeName: string;
    employeeSalary: number;
    employeeEmail?: string;
    address: Address;
};

let employee: Employee = {
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

employee.employeeName = "Rahul";

console.log(employee);

type EmployeeName = string;

let employee1: EmployeeName = "Safiya";

console.log(employee1);

export{};