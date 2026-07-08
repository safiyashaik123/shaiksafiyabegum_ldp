// ---------- typeof ----------

function checkValue(value: string | number) {

    if (typeof value === "string") {

        console.log("String:", value.toUpperCase());

    } else {

        console.log("Number:", value * value);

    }

}

checkValue("Safiya");
checkValue(10);


// ---------- instanceof ----------

class Employee {

    employeeName = "Safiya";

}

class Student {

    studentName = "Rahul";

}

function showPerson(person: Employee | Student) {

    if (person instanceof Employee) {

        console.log(person.employeeName);

    } else {

        console.log(person.studentName);

    }

}

showPerson(new Employee());
showPerson(new Student());


// ---------- in ----------

type Car = {

    company: string;

};

type Bike = {

    model: string;

};

function vehicle(vehicle: Car | Bike) {

    if ("company" in vehicle) {

        console.log(vehicle.company);

    } else {

        console.log(vehicle.model);

    }

}

vehicle({ company: "Toyota" });
vehicle({ model: "R15" });


// ---------- User Defined ----------

type Admin = {

    adminName: string;

};

type Customer = {

    customerId: number;

};

function isAdmin(user: Admin | Customer): user is Admin {

    return "adminName" in user;

}

function display(user: Admin | Customer) {

    if (isAdmin(user)) {

        console.log(user.adminName);

    } else {

        console.log(user.customerId);

    }

}

display({ adminName: "Safiya" });
display({ customerId: 101 });
export{};