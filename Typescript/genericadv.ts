// -------------------------
// keyof Example
// -------------------------

type Employee = {
    employeeId: number;
    employeeName: string;
    employeeSalary: number;
};

function getValue<T, K extends keyof T>(
    object: T,
    key: K
) {
    return object[key];
}

let employee: Employee = {
    employeeId: 101,
    employeeName: "Safiya",
    employeeSalary: 50000
};

console.log(getValue(employee, "employeeName"));
console.log(getValue(employee, "employeeSalary"));


// -------------------------
// Generic Default Type
// -------------------------

class Box<T = string> {

    constructor(public value: T) {}

}

let firstBox = new Box("Hello");

let secondBox = new Box<number>(100);

console.log(firstBox.value);

console.log(secondBox.value);


// -------------------------
// Generic Utility Function
// -------------------------

function swap<T>(
    first: T,
    second: T
): [T, T] {

    return [second, first];

}

console.log(swap(10,20));

console.log(swap("A","B"));

console.log(swap(true,false));
export{};