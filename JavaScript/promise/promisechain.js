new Promise(function(resolve){

    resolve(5000);

})
.then(function(balance){

    console.log("Current Balance:", balance);

    return balance - 1000;

})
.then(function(balance){

    console.log("After Shopping:", balance);

    return balance - 500;

})
.then(function(balance){

    console.log("After Petrol:", balance);

});