function Logger(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const original = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey}`);
        console.log("Arguments:", args);

        const result = original.apply(this, args);

        console.log("Result:", result);

        return result;
    };
}

class Calculator {

    @Logger
    multiply(a: number, b: number) {
        return a * b;
    }

}

const calc = new Calculator();

calc.multiply(5, 4);