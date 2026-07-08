// ==========================
// Function Declaration
// ==========================

function addNumbers(firstNumber: number, secondNumber: number): number {

    return firstNumber + secondNumber;

}

console.log("Function Declaration:");
console.log(addNumbers(10, 20));


// ==========================
// Function Expression
// ==========================

let subtractNumbers = function (
    firstNumber: number,
    secondNumber: number
): number {

    return firstNumber - secondNumber;

};

console.log("\nFunction Expression:");
console.log(subtractNumbers(20, 10));


// ==========================
// Arrow Function
// ==========================

let multiplyNumbers = (
    firstNumber: number,
    secondNumber: number
): number => {

    return firstNumber * secondNumber;

};

console.log("\nArrow Function:");
console.log(multiplyNumbers(10, 20));