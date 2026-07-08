"use strict";
// -------------------------
// keyof Example
// -------------------------
Object.defineProperty(exports, "__esModule", { value: true });
function getValue(object, key) {
    return object[key];
}
let employee = {
    employeeId: 101,
    employeeName: "Safiya",
    employeeSalary: 50000
};
console.log(getValue(employee, "employeeName"));
console.log(getValue(employee, "employeeSalary"));
// -------------------------
// Generic Default Type
// -------------------------
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
}
let firstBox = new Box("Hello");
let secondBox = new Box(100);
console.log(firstBox.value);
console.log(secondBox.value);
// -------------------------
// Generic Utility Function
// -------------------------
function swap(first, second) {
    return [second, first];
}
console.log(swap(10, 20));
console.log(swap("A", "B"));
console.log(swap(true, false));
