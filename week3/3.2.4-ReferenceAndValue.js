// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4);
console.log("Hello, world" === "Hello, world");

let x = false;
let y = x;
console.log(x === y);
x = !x;
console.log(x === y);
//false because => true = false
console.log([1, 2, "c"] === [1, 2, "c"]);
//false b/c they reference different memory address spaces
console.log({} === {});

y = { id: 1 };
x = y;
console.log(x === y);
y.id += 1;
console.log(x.id === y.id);
