class Student {

    constructor(age) {
        this._age = age;
    }

    // Getter
    get Age() {
        return this._age;
    }

    // Setter
    set Age(value) {

        if (value >= 0) {
            this._age = value;
        } else {
            console.log("Age cannot be negative");
        }

    }

}

let student = new Student(20);

console.log(student.Age);   

student.Age = 25;          

console.log(student.Age);  

student.Age = -10;          

console.log(student.Age);   