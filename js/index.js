class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    constructor(make, model, year, licensePlate) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    }

    assignOwner(person) {
        if (person.age > 18) {
        this.owner = person;
    } else {
        console.log("Cannot assign owner. Person must be over 18 years old.");
    }
    }

    displayInfo() {
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`License Plate: ${this.licensePlate}`);
        if (this.owner) {
        console.log("Owner Information:");
        this.owner.displayInfo();
    } else {
        console.log("No owner assigned.");
    }
    }
}

  // Creating instances of Person class
const person1 = new Person("John Doe", 25);
const person2 = new Person("Jane Smith", 17);
const person3 = new Person("Alex Johnson", 32);

  // Creating instances of Car class
const car1 = new Car("Toyota", "Camry", 2021, "ABC123");
const car2 = new Car("Honda", "Accord", 2019, "XYZ456");
const car3 = new Car("Ford", "Mustang", 2018, "DEF789");

  // Assigning owners to cars
car1.assignOwner(person1);
car2.assignOwner(person2); // Will display a message in the console
car3.assignOwner(person3);

  // Displaying information about cars and owners
car1.displayInfo();
car2.displayInfo();
car3.displayInfo();
