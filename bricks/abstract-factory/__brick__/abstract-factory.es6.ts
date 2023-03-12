// A factory of factories a factory that groups the individual but
// related/dependent factories together without specifying their concrete classes.

class WoodenDoor {
  getDescription() {
    return "I am a wooden door";
  }
}

class IronDoor {
  getDescription() {
    return "I am an iron door";
  }
}

class Welder {
  getDescription() {
    return "I can only fit iron doors";
  }
}

class Carpenter {
  getDescription() {
    return "I can only fit wooden doors";
  }
}

// Wooden factory to return carpenter and wooden door
export class WoodenDoorFactory {
  makeDoor() {
    return new WoodenDoor();
  }

  makeFittingExpert() {
    return new Carpenter();
  }
}

// Iron door factory to get iron door and the relevant fitting expert
export class IronDoorFactory {
  makeDoor() {
    return new IronDoor();
  }

  makeFittingExpert() {
    return new Welder();
  }
}
