"use strict";
// ---------- typeof ----------
Object.defineProperty(exports, "__esModule", { value: true });
function checkValue(value) {
    if (typeof value === "string") {
        console.log("String:", value.toUpperCase());
    }
    else {
        console.log("Number:", value * value);
    }
}
checkValue("Safiya");
checkValue(10);
// ---------- instanceof ----------
var Employee = /** @class */ (function () {
    function Employee() {
        this.employeeName = "Safiya";
    }
    return Employee;
}());
var Student = /** @class */ (function () {
    function Student() {
        this.studentName = "Rahul";
    }
    return Student;
}());
function showPerson(person) {
    if (person instanceof Employee) {
        console.log(person.employeeName);
    }
    else {
        console.log(person.studentName);
    }
}
showPerson(new Employee());
showPerson(new Student());
function vehicle(vehicle) {
    if ("company" in vehicle) {
        console.log(vehicle.company);
    }
    else {
        console.log(vehicle.model);
    }
}
vehicle({ company: "Toyota" });
vehicle({ model: "R15" });
function isAdmin(user) {
    return "adminName" in user;
}
function display(user) {
    if (isAdmin(user)) {
        console.log(user.adminName);
    }
    else {
        console.log(user.customerId);
    }
}
display({ adminName: "Safiya" });
display({ customerId: 101 });
