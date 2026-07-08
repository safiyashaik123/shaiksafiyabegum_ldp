function checkResult(callback) {

    setTimeout(() => {

        let marks = 80;

        callback(null, marks);

    }, 3000);

}

checkResult(function(error, result) {

    if (error) {
        console.log(error);
    } else {
        console.log("Marks =", result);
    }

});