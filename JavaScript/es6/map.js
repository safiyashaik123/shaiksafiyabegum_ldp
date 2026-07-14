let car = new Map();

car.set("Brand","Toyota");
car.set("Model","Innova");

console.log(car.get("Brand"));

console.log(car.has("Model"));

console.log(car.size);

car.delete("Model");

console.log(car);

//car.clear();