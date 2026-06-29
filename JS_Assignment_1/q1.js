
function greet(name) {
    return "Hello, " + name + "!";
}

function displayGreeting(callback, name) {
    console.log(callback(name));
}
displayGreeting(greet, "Safiya");