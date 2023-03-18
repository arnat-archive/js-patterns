import {
  Bank,
  Paypal,
  Bitcoin,
} from "../../js-patterns/bricks/chain-of-responsibility/__brick__/chain-of-responsibility";

it("it should test chain of responsibility pattern", () => {
  const bank = new Bank(100); // Bank with balance 100

  const paypal = new Paypal(200); // Paypal with balance 200
  const bitcoin = new Bitcoin(300); // Bitcoin with balance 300

  bank.setNext(paypal);
  expect(bank.pay(150)).toBe("Paid 150 using Paypal");
  paypal.setNext(bitcoin);
  expect(bank.pay(259)).toBe("Paid 259 using bitcoin");
});
