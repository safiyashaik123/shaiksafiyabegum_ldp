// Optional Parameter
function employeeInfo(
    employeeName: string,
    employeeAge?: number
): void {

    console.log(employeeName);
    console.log(employeeAge);

}

// Default Parameter
function employeeCity(
    employeeName: string,
    city: string = "Hyderabad"
): void {

    console.log(employeeName);
    console.log(city);

}

// Rest Parameter
function totalSalary(...salary: number[]): number {

    let total = 0;

    for (let amount of salary) {

        total += amount;

    }

    return total;

}

// Function Overloading
function add(firstValue: number, secondValue: number): number;
function add(firstValue: string, secondValue: string): string;

function add(firstValue: any, secondValue: any): any {

    return firstValue + secondValue;

}

// Calling Functions

employeeInfo("Safiya");
employeeInfo("Rahul", 22);

employeeCity("Safiya");
employeeCity("Rahul", "Chennai");

console.log(totalSalary(10000, 20000, 30000));

console.log(add(10, 20));
console.log(add("Hello ", "TypeScript"));