import { TeaMaker, TeaShop } from "../../bricks/flyweight/__brick__/flyweight";

describe("Proxy es6 test", () => {
  it("We can create a Proxy", () => {
    const teaMaker = new TeaMaker();
    const shop = new TeaShop(teaMaker);

    shop.takeOrder("less sugar", 1);
    shop.takeOrder("more milk", 2);
    shop.takeOrder("without sugar", 5);

    expect(shop.serve()).toBe(
      " #1 KarakTea less sugar #2 KarakTea more milk #5 KarakTea without sugar"
    );
  });
});
