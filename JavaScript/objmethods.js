let employee = {
    id: 101,
    name: "Rahul",
    salary: 50000,
    department: "IT"
};

console.log(Object.keys(employee));
console.log(Object.values(employee));
console.log(Object.entries(employee));

for (let key in employee) {
    console.log(key + " : " + employee[key]);
}