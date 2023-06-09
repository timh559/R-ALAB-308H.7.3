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
  eat(num) {
    this.weight += 10 * num;
    this.mood += 5 * num;
  }
  exercise(num) {
    this.weight -= 5 * num;
  }
  ageUp(num) {
    this.age += 1 * num;
    this.height += 3 * num;
    this.weight += 4 * num;
    this.mood -= 1 * num;
    this.bankAccount += 10 * num;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}
let timmy = new Person("Timmy");
timmy.ageUp(5);
timmy.eat(5);
timmy.exercise(5);
timmy.ageUp(9);
let gus = new Hamster("Gus");
gus.owner = "Timmy";
timmy.buyHamster(gus);
timmy.ageUp(15);
timmy.eat(2);
timmy.exercise(2);
console.log(timmy);

const Chef = (appetizer, entree, dessert) => {
  const dinner = {
    Appetizer: appetizer,
    Entree: entree,
    Dessert: dessert,
  };
  return dinner;
};
const dinner1 = Chef("Salad", "Steak", "Cheesecake");
const dinner2 = Chef("Soup", "Chicken", "Ice Cream");
const dinner3 = Chef("Bruschetta", "Pasta", "Tiramisu");

console.log(dinner1);
console.log(dinner2);
console.log(dinner3);
