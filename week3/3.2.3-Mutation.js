let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};

console.log("before mutation", x, y, z);
// reassign x, y, and z to FALSY values

// print x, y, and z

const a = "name";
const b = [];
const c = {};

console.log("before mutation", a, b, c);

// try to reassign a, b, and c to FALSY values
a = null;
b = 0;
c = "";

console.log("after mutation", a, b, c);
// Output: Cannot reassign once const is used
// using BRACKET NOTATION, assign a value to b
b[0] = 1;
//Sets the 1st value of b to 1
// using DOT NOTATION, assign a PROPERTY to c
c.good = "Time";
//Output = {good: 'Time'}
// using DOT NOTATION, assign a METHOD to c
c.greet = alert("Hello there!");
// using BRACKET NOTATION, call the method in c
console.log(c.greet());
// print a, b, and c
