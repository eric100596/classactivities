// refactor your Animal function constructor and methods to use the class keyword
class Animal {
    constructor(name, type, color, weight, age, personality) {
        this.name = name;
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.age = age;
        this.personality = personality;
        this.bio = `This ${this.personality} ${this.color} ${this.type} is ${this.age} years old, weighs ${this.weight} pounds, and is called ${this.name}.`

    }
    greet() {
        return `Hello! I'm a this ${this.type}!`
    }
}


// extend the Animal class with a type of animal
class Cat extends Animal {
    constructor(name, type, color, weight, age, personality, breed){
        super(name, type, color, weight, age, personality)
        this.breed = breed;
    }
    greet() {
        return `Meeeooow!`;
    }
}
// add some unique methods and properties to the class extension
const Garfield = new Cat("Garfield", "Cat", "Orange", 130, 15, "Sassy", "Mutt");

Garfield.play = function() {
    return `I love to play with my toys!`
}

console.log(Garfield);
console.log("Garfield greeting...", Garfield.greet());

//Garfield.play is a new function that overwrites the greet function//
// create an instance of the class extension and call one of its methods
