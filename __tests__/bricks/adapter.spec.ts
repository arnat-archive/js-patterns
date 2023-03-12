import {
  AfricanLion,
  AsianLion,
  WildDog,
  WildDogAdapter,
  Hunter,
} from "../../bricks/adapter/__brick__/adapter";

describe("Factory es6 test", () => {
  it("We can create a adapter", () => {
    const wildDog = new WildDog();
    const africanLion = new AfricanLion();
    const asianLion = new AsianLion();

    const wildDogAdapter = new WildDogAdapter(wildDog);

    const hunter = new Hunter();

    expect(hunter.hunt(africanLion)).toBe("african lion");
    expect(hunter.hunt(asianLion)).toBe("asian lion");
    expect(hunter.hunt(wildDogAdapter)).toBe("wild dog");
  });
});
