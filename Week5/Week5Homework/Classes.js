class Beaches {
    constructor(name, city, waveHeight) {
this.name = name;
this.city = city;
this.waveHeight = waveHeight;
    }
    thisBeach() {
        return `${this.name} beach is in ${this.city}, and has waves ${this.waveHeight} high!`;

    }
    
}

const huntington = new Beaches("Huntington", "Huntington Beach", "5 feet");
huntington.thisBeach();

class bestBeaches extends Beaches {
    constructor(name, city, waveHeight, attendance, exclusivity) {
        super(name, city, waveHeight);
        this.attendance = attendance;
        this.exclusivity = exclusivity;
    }
    thisIsTheBestBeach() {
        return `${this.name} beach is in ${this.city}, and has waves ${this.waveHeight} high! 
        Also, ${this.name} has a yearly attendance of ${this.attendance}, and is ${this.exclusivity}.`;
    }
}

const malibu = new bestBeaches("Malibu", "Malibu, CA", "6 feet", "33,000", "very exclusive");
malibu.thisIsTheBestBeach();