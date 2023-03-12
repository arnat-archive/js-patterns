// Using the proxy pattern, a class represents the functionality of another class.

export class LabDoor {
  open() {
    return "Opening lab door";
  }

  close() {
    return "Closing the lab door";
  }
}

export class Security {
  door?;
  constructor(door) {
    this.door = door;
  }

  open(password) {
    if (this.authenticate(password)) {
      return this.door.open();
    } else {
      return "Big no! It ain't possible.";
    }
  }

  authenticate(password) {
    return password === "ecr@t";
  }

  close() {
    return this.door.close();
  }
}

// const door = new Security(new LabDoor())
// door.open('invalid') // Big no! It ain't possible.

// door.open('ecr@t') // Opening lab door
// door.close() // Closing lab door
