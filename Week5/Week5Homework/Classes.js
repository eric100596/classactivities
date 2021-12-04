class Beaches {
    constructor(name, city, waveHeight) {
this.name = name;
this.city = city;
this.waveHeight = waveHeight;
    }
    thisBeach() {
        return `${this.name} beach is in ${this.city}, and has waves ${this.waveHeight} high`;

    }
    
}

const huntington = new Beaches("Huntington", "Huntington Beach", "5 feet");
console.table(huntington);