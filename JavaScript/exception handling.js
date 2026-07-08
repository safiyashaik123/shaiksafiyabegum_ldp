let age = 15;

try {

    console.log("Checking eligibility...");

    if (age < 18) {
        throw new Error("You are not eligible to vote.");
    }

    console.log("You are eligible to vote.");

}

catch (error) {

    console.log("Error Name :", error.name);
    console.log("Error Message :", error.message);

}

finally {

    console.log("Program Finished.");

}