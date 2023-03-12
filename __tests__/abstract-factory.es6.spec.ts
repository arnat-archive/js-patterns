import {
  WoodenDoorFactory,
  IronDoorFactory,
} from "../bricks/abstract-factory/__brick__/abstract-factory.es6";

describe("Factory es6 test", () => {
  it("We can create a WoodenDoorFactory instance", () => {
    const woodenFactory = new WoodenDoorFactory();

    const door = woodenFactory.makeDoor();
    const expert = woodenFactory.makeFittingExpert();

    expect(door.getDescription()).toBe("I am a wooden door");
    expect(expert.getDescription()).toBe("I can only fit wooden doors");
  });
  it("We can create a IronDoorFactory instance", () => {
    const ironFactory = new IronDoorFactory();

    const door = ironFactory.makeDoor();
    const expert = ironFactory.makeFittingExpert();

    expect(door.getDescription()).toBe("I am an iron door");
    expect(expert.getDescription()).toBe("I can only fit iron doors");
  });
});
