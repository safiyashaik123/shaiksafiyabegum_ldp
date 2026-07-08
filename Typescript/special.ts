
let employeeData: any = "Safiya";
employeeData = 22;

let userInput: unknown = "TypeScript";

function welcomeMessage(): void {
    console.log("Welcome to TypeScript!");
}

function showError(): never {
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
export {};