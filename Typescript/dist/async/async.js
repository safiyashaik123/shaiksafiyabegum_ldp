"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getStudent() {
    return new Promise((resolve, reject) => {
        let success = true;
        setTimeout(() => {
            if (success) {
                resolve("Safiya");
            }
            else {
                reject("Server Error");
            }
        }, 2000);
    });
}
async function displayStudent() {
    try {
        console.log("Loading Student...");
        let student = await getStudent();
        console.log(student);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        console.log("Program Finished");
    }
}
displayStudent();
