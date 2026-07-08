try {

    let age = 15;

    if(age < 18){

        throw new Error("You are not eligible.");

    }

    console.log("Eligible");

}

catch(error){

    console.log("Error Name :", error.name);

    console.log("Error Message :", error.message);

    console.log("Error Stack :");

    console.log(error.stack);

}