function outer(){

    let message = "Hello";

    function inner(){

        console.log(message);

    }

    return inner;

}

let result = outer();

result();