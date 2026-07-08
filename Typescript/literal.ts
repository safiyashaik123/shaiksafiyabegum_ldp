// -------------------------
// String Literal
// -------------------------

type UserRole =
    "Admin"
    | "Employee"
    | "Manager";

let role: UserRole = "Admin";

console.log("Role:", role);


// -------------------------
// Number Literal
// -------------------------

let rating:
    1
    | 2
    | 3
    | 4
    | 5;

rating = 5;

console.log("Rating:", rating);


// -------------------------
// Function Literal
// -------------------------

function move(
    direction:
    "left"
    | "right"
) {

    console.log("Move:", direction);

}

move("left");


// -------------------------
// Object Literal
// -------------------------

type Employee = {

    employeeName: string;

    department:
        "HR"
        | "IT"
        | "Finance";

};

let employee: Employee = {

    employeeName: "Safiya",

    department: "IT"

};

console.log(employee);
export{};