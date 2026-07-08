"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic Function
function printValue(value) {
    return value;
}
console.log(printValue(100));
console.log(printValue("Safiya"));
console.log(printValue(true));
let numberBox = {
    value: 100
};
console.log(numberBox.value);
// Generic Class
class Storage {
    data;
    constructor(data) {
        this.data = data;
    }
}
let employee = new Storage("Rahul");
console.log(employee.data);
// Multiple Generic Types
function display(first, second) {
    console.log(first);
    console.log(second);
}
display(101, "Employee");
