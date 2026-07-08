interface Address {

    city: string;
    state: string;

}

interface Employee {

    readonly employeeId: number;
    employeeName: string;
    employeeSalary: number;
    employeeEmail?: string;
    address: Address;

}

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

employee.employeeSalary = 60000;

console.log(employee);
export{};