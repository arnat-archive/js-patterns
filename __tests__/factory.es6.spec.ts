import BmwFactory from "../bricks/factory/__brick__/factory.es6";

describe("Factory es6 test", () => {
  it("We can create a X5 instance", () => {
    const x5: any = BmwFactory.create("X5");
    expect(x5.model).toBe("X5");
  });

  it("The X5 price is properly set", () => {
    const x5: any = BmwFactory.create("X5");
    expect(x5.price).toBe(108000);
  });
});
