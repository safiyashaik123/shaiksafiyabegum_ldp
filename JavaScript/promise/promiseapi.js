// Promise 1 (Success after 3 seconds)
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("HTML Completed");
    }, 3000);
});

// Promise 2 (Failure after 2 seconds)
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("CSS Failed");
    }, 2000);
});

// Promise 3 (Success after 1 second)
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("JavaScript Completed");
    }, 1000);
});

/*--------------------------------------------------
 Uncomment ONE method at a time
---------------------------------------------------*/

//1. Promise.all()
Promise.all([p1, p2, p3])
.then(result => console.log(result))
.catch(error => console.log(error));


// 2. Promise.allSettled()
// Promise.allSettled([p1, p2, p3])
// .then(result => console.log(result));


// 3. Promise.race()
// Promise.race([p1, p2, p3])
// .then(result => console.log(result))
// .catch(error => console.log(error));


// 4. Promise.any()
// Promise.any([p1, p2, p3])
// .then(result => console.log(result))
// .catch(error => console.log(error));


// 5. Promise.resolve()
// Promise.resolve("React Completed")
// .then(result => console.log(result));


// 6. Promise.reject()
// Promise.reject("NodeJS Failed")
// .catch(error => console.log(error));