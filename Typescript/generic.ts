// Generic Function
function printValue<T>(value:T):T{

    return value;

}

console.log(printValue(100));

console.log(printValue("Safiya"));

console.log(printValue(true));


// Generic Interface
interface Box<T>{

    value:T;

}

let numberBox:Box<number>={

    value:100

};

console.log(numberBox.value);


// Generic Class
class Storage<T>{

    constructor(public data:T){}

}

let employee=new Storage<string>("Rahul");

console.log(employee.data);


// Multiple Generic Types
function display<T,U>(first:T,second:U):void{

    console.log(first);

    console.log(second);

}

display<number,string>(101,"Employee");
export{};