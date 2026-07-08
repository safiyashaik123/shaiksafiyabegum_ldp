new Promise((resolve) => {

    resolve(10);

})

.then(result => {

    console.log(result);

    return result * 2;

})

.then(result => {

    console.log(result);

    throw new Error("Calculation Error");

})

.then(result => {

    console.log(result);

})

.catch(error => {

    console.log(error.message);

});