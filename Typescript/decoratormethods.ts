// Class Decorator
function Logger(constructor: Function) {

    console.log("Class Loaded");

}

// Property Decorator
function LogProperty(target: any, propertyKey: string) {

    console.log("Property:", propertyKey);

}

// Method Decorator
function LogMethod(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {

    console.log("Method:", propertyKey);

}

@Logger
class Employee {

    @LogProperty
    employeeName = "Safiya";

    @LogMethod
    display() {

        console.log("Employee Name:", this.employeeName);

    }

}

let employee = new Employee();

employee.display();
export{};