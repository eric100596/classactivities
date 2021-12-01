// create a function constructor that works as a template for an Animal
function Animal(name, type, color, weight, age, personality) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.weight = weight;
    this.age = age;
    this.personality = personality;
}

this.bio = `This ${this.personality} ${this.type} ${this.color} is ${this.weight} years old, weighs ${this.weight} pounds, and is called ${this.name}`
// include properties for name, type, weight, etc.
const fluffy = new Animal("Bruno", "doberman", "black", 41, 2, "happy");
// create a new instance on an Animal

// add methods to the Animal prototype
Animal.prototype.greet = function() {
    return `Hi, I'm a ${this.type}!`;
}
// attach a method directly to the Animal instance that "overwrites" a prototype method
bruno.greet = function() {
    return `Hi, I'm a ${this.type};`
}

console.log(bruno.greet);