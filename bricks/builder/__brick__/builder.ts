// Allows you to create different flavors of an object
//  while avoiding constructor pollution. Useful when
// there could be several flavors of an object.
// Or when there are a lot of steps involved in creation of an object.
// For creation MULT-STEP process

class Burger {
  size?;
  pepperoni?;
  lettuce?;
  cheeze?;
  tomato?;
  constructor(builder) {
    this.size = builder.size;
    this.cheeze = builder.cheeze || false;
    this.pepperoni = builder.pepperoni || false;
    this.lettuce = builder.lettuce || false;
    this.tomato = builder.tomato || false;
  }
}

export class BurgerBuilder {
  size?;
  pepperoni?;
  lettuce?;
  cheeze?;
  tomato?;
  constructor(size) {
    this.size = size;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addLettuce() {
    this.lettuce = true;
    return this;
  }

  addCheeze() {
    this.cheeze = true;
    return this;
  }

  addTomato() {
    this.tomato = true;
    return this;
  }

  build() {
    return new Burger(this);
  }
}
