

try {
    console.log(age);
} catch (error) {
    console.log("Reference Error:", error.message);
}

try {
    let num = 10;
    console.log(num.toUpperCase());
} catch (error) {
    console.log("Type Error:", error.message);
}

try {
    let value = 10;
    console.log(value.toPrecision(500));
} catch (error) {
    console.log("Range Error:", error.message);
}