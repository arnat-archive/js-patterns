import {
  SimpleCoffee,
  MilkCoffee,
} from "../../bricks/decorator/__brick__/decorator";

describe("Composite es6 test", () => {
  it("We can create a composite", () => {
    const someCoffee = new SimpleCoffee();
    expect(someCoffee.getCost()).toBe(10);
    expect(someCoffee.getDescription()).toBe("Simple Coffee");

    const anotherCoffee = new MilkCoffee(someCoffee);
    expect(anotherCoffee.getCost()).toBe(12);
    expect(anotherCoffee.getDescription()).toBe("Simple Coffee, milk");
  });
});
