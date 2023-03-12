import { ComputerFacade, Computer } from "../../bricks/facade/__brick__/facade";

describe("Composite es6 test", () => {
  it("We can create a composite", () => {
    const computer = new ComputerFacade(new Computer());
    expect(computer.turnOn()).toBe(
      "Ouch! Beep beep! Loading.. Ready to be used!"
    );
    expect(computer.turnOff()).toBe("Bup bup bup buzzzz! Haaah! Zzzzz");
  });
});
