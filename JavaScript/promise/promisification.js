function checkResultPromise() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let marks = 80;

            if (marks >= 35) {
                resolve(marks);
            } else {
                reject("Fail");
            }

        }, 3000);

    });

}

checkResultPromise()
.then(result => {
    console.log("Marks =", result);
})
.catch(error => {
    console.log(error);
});