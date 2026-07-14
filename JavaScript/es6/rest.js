function sum(...numbers){

    let total = 0;

    for(let num of numbers){

        total = total + num;

    }

    console.log(total);

}

sum(10,20,30);

sum(5,15,25,35);

sum(100,200);