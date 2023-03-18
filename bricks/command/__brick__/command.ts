// Allows you to encapsulate actions in objects. The key idea behind
// this pattern is to provide the means to decouple client from receiver.

// Receiver
export class Bulb {
  turnOn() {
    return "Bulb has been lit";
  }

  turnOff() {
    return "Darkness!";
  }
}

// Command
export class TurnOnCommand {
  bulb?;
  constructor(bulb) {
    this.bulb = bulb;
  }

  execute() {
    return this.bulb.turnOn();
  }

  undo() {
    return this.bulb.turnOff();
  }

  redo() {
    return this.execute();
  }
}

export class TurnOffCommand {
  bulb?;
  constructor(bulb) {
    this.bulb = bulb;
  }

  execute() {
    return this.bulb.turnOff();
  }

  undo() {
    return this.bulb.turnOn();
  }

  redo() {
    return this.execute();
  }
}

export class RemoteControl {
  submit(command) {
    return command.execute();
  }
}

// const bulb = new Bulb();

// const turnOn = new TurnOnCommand(bulb);
// const turnOff = new TurnOffCommand(bulb);

// const remote = new RemoteControl();

// expect(remote.submit(turnOn)).toBe("Bulb has been lit");
// expect(remote.submit(turnOff)).toBe("Darkness!");
