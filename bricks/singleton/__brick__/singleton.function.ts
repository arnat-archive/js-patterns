// In javascript, singletons can be implemented using the module pattern.
// Private variables and functions are hidden in a function closure,
// and public methods are selectively exposed.

export default class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public toString = function () {
    return "[object Singleton]";
  };
}
