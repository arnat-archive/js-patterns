// Facade pattern provides a simplified interface to a complex subsystem.

export class Computer {
  getElectricShock() {
    return "Ouch! ";
  }

  makeSound() {
    return "Beep beep! ";
  }

  showLoadingScreen() {
    return "Loading.. ";
  }

  bam() {
    return "Ready to be used!";
  }

  closeEverything() {
    return "Bup bup bup buzzzz! ";
  }

  sooth() {
    return "Zzzzz";
  }

  pullCurrent() {
    return "Haaah! ";
  }
}

export class ComputerFacade {
  computer?;
  constructor(computer) {
    this.computer = computer;
  }

  turnOn() {
    return (
      this.computer.getElectricShock() +
      this.computer.makeSound() +
      this.computer.showLoadingScreen() +
      this.computer.bam()
    );
  }

  turnOff() {
    return (
      this.computer.closeEverything() +
      this.computer.pullCurrent() +
      this.computer.sooth()
    );
  }
}

// const computer = new ComputerFacade(new Computer())
// computer.turnOn() // Ouch! Beep beep! Loading.. Ready to be used!
// computer.turnOff() // Bup bup buzzz! Haah! Zzzzz
