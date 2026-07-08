// ------------------
// UNION
// ------------------

type Employee = {

    employeeName: string;

};

type Student = {

    studentId: number;

};

type Person = Employee | Student;

let person1: Person = {

    employeeName: "Safiya"

};

let person2: Person = {

    studentId: 101

};

console.log(person1);

console.log(person2);


// ------------------
// INTERSECTION
// ------------------

type EmployeeInfo = {

    employeeName: string;

};

type StudentInfo = {

    studentId: number;

};

type EmployeeStudent = EmployeeInfo & StudentInfo;

let person3: EmployeeStudent = {

    employeeName: "Safiya",

    studentId: 101

};

console.log(person3);
export{};