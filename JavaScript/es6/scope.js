let a = 100; 

function test() {
    var b = 200; 

    if (true) {
        let c = 300; 

        console.log(a); 
        console.log(b); 
        console.log(c); 
    }

    // console.log(c); 
}

test();

// console.log(b); 
console.log(a); 