import { LabDoor, Security } from "../../bricks/proxy/__brick__/proxy";

describe("Proxy es6 test", () => {
  it("We can create a Proxy", () => {
    const door = new Security(new LabDoor());
    expect(door.open("invalid")).toBe("Big no! It ain't possible.");

    expect(door.open("ecr@t")).toBe("Opening lab door");
    expect(door.close()).toBe("Closing the lab door");
  });
});
