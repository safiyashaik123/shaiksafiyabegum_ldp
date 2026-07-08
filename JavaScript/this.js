let employee = {

    name: "Rahul",

    salary: 50000,

    details() {

        console.log("Employee:", this.name);

        console.log("Salary:", this.salary);

    }

};

employee.details();