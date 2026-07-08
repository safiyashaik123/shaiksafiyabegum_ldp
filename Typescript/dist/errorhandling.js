"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let age = -10;
try {
    console.log("Checking age...");
    if (age < 0) {
        throw new Error("Age cannot be negative.");
    }
    console.log("Valid Age");
}
catch (error) {
    if (error instanceof Error) {
        console.log("Error:", error.message);
    }
}
finally {
    console.log("Program Finished");
}
