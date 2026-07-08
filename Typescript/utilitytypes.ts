// Record
type Subjects = "Maths" | "Science";

type Marks = Record<Subjects, number>;

let marks: Marks = {

    Maths: 95,
    Science: 90

};

console.log(marks);

// Exclude
type Colors =
    "Red"
    | "Green"
    | "Blue";

type NewColors =
    Exclude<Colors, "Green">;

let color: NewColors = "Red";

console.log(color);

// Extract
type Selected =
    Extract<Colors, "Blue">;

let selected: Selected = "Blue";

console.log(selected);

// NonNullable
type Name =
    NonNullable<string | null>;

let employeeName: Name = "Safiya";

console.log(employeeName);

// ReturnType
function add(
    a: number,
    b: number
) {

    return a + b;

}

type Result =
    ReturnType<typeof add>;

let total: Result = 100;

console.log(total);
export{};