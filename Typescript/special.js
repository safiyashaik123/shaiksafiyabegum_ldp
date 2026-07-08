"use strict";
let employeeData = "Safiya";
employeeData = 22;
let userInput = "TypeScript";
function welcomeMessage() {
    console.log("Welcome to TypeScript!");
}
function showError() {
    throw new Error("Something went wrong!");
}
// Using any
console.log("Employee Data:", employeeData);
// Using unknown
if (typeof userInput === "string") {
    console.log("User Input:", userInput.toUpperCase());
}
// Using void
welcomeMessage();
// Using never
//showError();
