import {
  Sheep,
  SheepPrototype,
} from "../../bricks/prototype/__brick__/prototype";

describe("Factory es6 test", () => {
  it("We can create a clone Sheep from prototype", () => {
    const originalSheep = new Sheep("Jolly");
    expect(originalSheep.getName()).toBe("Jolly");
    expect(originalSheep.getCategory()).toBe("Mountain Sheep");

    // Clone and modify what is required
    const prototype = new SheepPrototype(originalSheep);
    const clonedSheep = prototype.clone();
    clonedSheep.setName("Dolly");
    expect(clonedSheep.getName()).toBe("Dolly");
    expect(clonedSheep.getCategory()).toBe("Mountain Sheep");

    expect(originalSheep.getName()).toBe("Jolly");
    expect(originalSheep.getCategory()).toBe("Mountain Sheep");
  });
});
