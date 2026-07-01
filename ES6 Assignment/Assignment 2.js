function getData(uId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com"); // Return the email
        }, 4000);
    });
}

console.log("Start");

getData("skc")
    .then((email) => {
        console.log("Email id of the user is: " + email);
        console.log("End");
    })
    .catch((error) => {
        console.log(error);
    });