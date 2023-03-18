import {
  Bulb,
  TurnOffCommand,
  TurnOnCommand,
  RemoteControl,
} from "../../bricks/command/__brick__/command";

it("should test Command pattern", () => {
  const bulb = new Bulb();

  const turnOn = new TurnOnCommand(bulb);
  const turnOff = new TurnOffCommand(bulb);

  const remote = new RemoteControl();

  expect(remote.submit(turnOn)).toBe("Bulb has been lit");
  expect(remote.submit(turnOff)).toBe("Darkness!");
});
