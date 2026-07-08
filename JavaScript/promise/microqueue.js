console.log("1. Program Started");

let promise = Promise.resolve(10);

promise

.then((result) => {

    console.log("2. First then:", result);

    return result * 2;

})

.then((result) => {

    console.log("3. Second then:", result);

    return result + 5;

})

.then((result) => {

    console.log("4. Third then:", result);

    throw new Error("Something Went Wrong");

})

.catch((error) => {

    console.log("5. Catch:", error.message);

    return 100;

})

.then((result) => {

    console.log("6. Fourth then:", result);

})

.finally(() => {

    console.log("7. Finally Block");

});

setTimeout(() => {

    console.log("8. setTimeout Executed");

}, 0);

console.log("9. Program Ended");