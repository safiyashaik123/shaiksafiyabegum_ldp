let colors = new Set(["Red","Green","Blue"]);

colors.add("Yellow");
console.log(colors)
colors.delete("Green");

console.log(colors.has("Red"));

console.log(colors.size);

colors.clear();

console.log(colors);