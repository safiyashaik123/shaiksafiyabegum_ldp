let employeeNames: string[] = ["Rahul", "Safiya"];

// push
employeeNames.push("Anjali");

// pop
employeeNames.pop();

// unshift
employeeNames.unshift("Ravi");

// shift
employeeNames.shift();

console.log(employeeNames);

let marks: number[] = [45, 82, 30, 95, 70];

console.log(marks.filter((mark) => mark >= 50));

console.log(marks.map((mark) => mark + 5));

console.log(marks.reduce((total, mark) => total + mark, 0));