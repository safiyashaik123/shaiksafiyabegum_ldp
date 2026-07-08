type Employee = {

    employeeId: number | string;
    employeeName: string;

};

let employee: Employee = {

    employeeId: "EMP101",
    employeeName: "Safiya"

};

console.log(employee);

if (typeof employee.employeeId === "string") {

    console.log(employee.employeeId.toUpperCase());

}

employee.employeeId = 101;

console.log(employee);