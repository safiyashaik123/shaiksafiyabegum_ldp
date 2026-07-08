"use strict";
// Optional Parameter
function employeeInfo(employeeName, employeeAge) {
    console.log(employeeName);
    console.log(employeeAge);
}
// Default Parameter
function employeeCity(employeeName, city = "Hyderabad") {
    console.log(employeeName);
    console.log(city);
}
// Rest Parameter
function totalSalary(...salary) {
    let total = 0;
    for (let amount of salary) {
        total += amount;
    }
    return total;
}
function add(firstValue, secondValue) {
    return firstValue + secondValue;
}
// Calling Functions
employeeInfo("Safiya");
employeeInfo("Rahul", 22);
employeeCity("Safiya");
employeeCity("Rahul", "Chennai");
console.log(totalSalary(10000, 20000, 30000));
console.log(add(10, 20));
console.log(add("Hello ", "TypeScript"));
