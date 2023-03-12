import {
  Developer,
  Designer,
  Organization,
} from "../../bricks/composite/__brick__/composite";

describe("Composite es6 test", () => {
  it("We can create a composite", () => {
    const john = new Developer("John Doe", 12000);
    const jane = new Designer("Jane", 10000);

    const organization = new Organization();
    organization.addEmployee(john);
    organization.addEmployee(jane);

    expect(organization.getNetSalaries()).toBe(22000);
  });
});
