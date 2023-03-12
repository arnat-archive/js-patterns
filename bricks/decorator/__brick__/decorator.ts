// Decorator pattern lets you dynamically change the behavior of
// an object at run time by wrapping them in an object of a decorator class.

export class SimpleCoffee {
  getCost() {
    return 10;
  }

  getDescription() {
    return "Simple Coffee";
  }
}

export class MilkCoffee {
  coffee?;
  constructor(coffee) {
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost() + 2;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, milk`;
  }
}

// let someCoffee;

// someCoffee = new SimpleCoffee();
// console.log(someCoffee.getCost()); // 10
// console.log(someCoffee.getDescription()); // Simple Coffee
