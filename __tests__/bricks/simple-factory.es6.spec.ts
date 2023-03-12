import DoorFactory from "../../bricks/simple-factory/__brick__/simple-factory.es6";

describe("Factory es6 test", () => {
  it("We can create a WoodenDoor instance", () => {
    const door = DoorFactory.makeDoor(100, 200);
    expect(door.getWidth()).toBe(100);
    expect(door.getHeight()).toBe(200);
  });
});
