// In object-oriented programming (OOP), a factory is an object for creating other objects – formally a factory is a
//  function or method that returns objects of a varying prototype or class from some method call, which is assumed to
// be "new".
class WoodenDoor {
  width?;
  height?;
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }
}

const DoorFactory = {
  makeDoor: (width, height) => new WoodenDoor(width, height),
};

export default DoorFactory;
