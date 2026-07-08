function checkResult(marks) {
    return new Promise(function (resolve, reject) {
        console.log("Checking Result...");
        setTimeout(function () {
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
    .then(function (result) {
    console.log("then():", result);
})
    .catch(function (error) {
    console.log("catch():", error);
})
    .finally(function () {
    console.log("finally(): Result Process Completed");
});
