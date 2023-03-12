import { BurgerBuilder } from "../bricks/builder/__brick__/builder";

describe("Factory es6 test", () => {
  it("We can create a Burger instance", () => {
    const burger = new BurgerBuilder(14)
      .addPepperoni()
      .addLettuce()
      .addTomato()
      .build();

    expect(burger.pepperoni).toBeTruthy();
    expect(burger.lettuce).toBeTruthy();
    expect(burger.lettuce).toBeTruthy();
    expect(burger.tomato).toBeTruthy();
  });
});
