// create an object literal
const animal = {
    name: "rudy",
    age: 12,
    hobbies: ["playing catch", "getting belly rubs"],
}
// include a method that uses "this"
const person = {
    name: "Cameron",
    birthOrder: "Baby",
    greet() {
        return `Good morning ${this.name};`
    }
}

person.greet();
// create a function in the global scope that prints "this"
function logThis () {
    console.log("this is: ", this);
}