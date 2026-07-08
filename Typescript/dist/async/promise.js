"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkResult(marks) {
    return new Promise((resolve, reject) => {
        console.log("Checking Result...");
        setTimeout(() => {
            if (marks >= 35) {
                resolve("Congratulations! You Passed.");
            }
            else {
                reject("Sorry! You Failed.");
            }
        }, 3000);
    });
}
checkResult(80)
    .then((result) => {
    console.log("then():", result);
})
    .catch((error) => {
    console.log("catch():", error);
})
    .finally(() => {
    console.log("finally(): Result Process Completed");
});
