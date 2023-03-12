// Adapter pattern lets you wrap an otherwise incompatible object in an
// adapter to make it compatible with another class.

export class AfricanLion {
  roar() {
    return "african lion";
  }
}

export class AsianLion {
  roar() {
    return "asian lion";
  }
}

export class WildDog {
  bark() {
    return "wild dog";
  }
}

export class WildDogAdapter {
  dog?;

  constructor(dog) {
    this.dog = dog;
  }

  roar() {
    return this.dog.bark();
  }
}

export class Hunter {
  hunt(lion) {
    // ... some code before
    return lion.roar();
    //... some code after
  }
}

// const wildDog = new WildDog();
// const africanLion = new AfricanLion();
// const asianLion = new AsianLion();

// const wildDogAdapter = new WildDogAdapter(wildDog);

// const hunter = new Hunter();

// expect(hunter.hunt(africanLion)).toBe("african lion");
// expect(hunter.hunt(asianLion)).toBe("asian lion");
// expect(hunter.hunt(wildDogAdapter)).toBe("wild dog");
