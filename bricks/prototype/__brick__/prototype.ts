// In short, it allows you to create a copy of an existing object
// and modify it to your needs, instead of going through the trouble
// of creating an object from scratch and setting it up.

export class Sheep {
  name?;
  category?;

  constructor(name, category = "Mountain Sheep") {
    this.name = name;
    this.category = category;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setCategory(category) {
    this.category = category;
  }

  getCategory() {
    return this.category;
  }
}

export class SheepPrototype {
  proto?;

  constructor(proto) {
    this.proto = proto;
  }

  clone() {
    return new Sheep(this.proto.name, this.proto.category);
  }
}
