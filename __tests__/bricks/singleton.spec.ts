import Singleton from "../../bricks/singleton/__brick__/singleton";
import SingletonES6 from "../../bricks/singleton/__brick__/singleton.es6";
import SingletonClosure from "../../bricks/singleton/__brick__/singleton.closure";
import SingletonInstance from "../../bricks/singleton/__brick__/singleton.function";

describe("Factory es6 test", () => {
  it("We can create a singleton", () => {
    const oSingle1 = Singleton;
    const oSingle2 = Singleton;

    expect(oSingle1.toString()).toBe("[object Singleton]");
    expect(oSingle2.toString()).toBe("[object Singleton]");
    expect(Singleton.toString()).toBe("[object Singleton]");
    expect(oSingle1 === oSingle2).toBeTruthy();
  });

  it("We can create a singleton ES6", () => {
    const oSingle1ES6 = new SingletonES6();
    const oSingle2ES6 = new SingletonES6();

    expect(oSingle1ES6.toString()).toBe("[object Singleton]");
    expect(oSingle2ES6.toString()).toBe("[object Singleton]");
    expect(new SingletonES6().toString()).toBe("[object Singleton]");
    expect(oSingle1ES6 === oSingle2ES6).toBeTruthy();
  });

  it("We can create a singleton closure", () => {
    var oSingle1 = SingletonClosure;
    var oSingle2 = SingletonClosure;
    expect(SingletonClosure.toString()).toBe("[object Singleton]");
    expect(oSingle1 === oSingle2).toBeTruthy();
  });

  it("We can create a singleton function instance", () => {
    var oSingle1 = SingletonInstance.getInstance();
    var oSingle2 = SingletonInstance.getInstance();
    expect(SingletonInstance.getInstance().toString()).toBe(
      "[object Singleton]"
    );
    expect(oSingle1 === oSingle2).toBeTruthy();
  });
});
