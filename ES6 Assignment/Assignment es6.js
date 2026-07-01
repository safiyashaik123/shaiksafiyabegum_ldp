//1. Refactor the function into a one-liner
const printName = (name) => "Hi " + name;

console.log(printName("Safiya"));

// 2. Rewrite using Template Literals
const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;
console.log(printBill("Safiya", 500));

// 3. Object Destructuring
const person = {
    name: "Noam Chomsky",
    age: 92
};

const { name, age } = person;

console.log(name);
console.log(age);