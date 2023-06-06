class Hamster {

    constructor(name) {
        this.name = name;
        this.owner = "";
        this.price = 15;
    }
    wheelRun() {
        console.log("squeak squeak");
    }
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price;
    }
}
class Person {

    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
    eat() {
        this.weight += 10;
        this.mood += 5;
    }
    exercise() {
        this.weight -= 5;
    }
    ageUp(num) {
        this.age += (1 * num);
        this.height += (3 * num);
        this.weight += (2 * num);
        this.mood -= (2 * num);
        this.bankAccount += (10 * num);
    }
}